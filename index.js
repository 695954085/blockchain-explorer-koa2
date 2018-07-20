const Koa = require('koa');
const path = require('path');
const compress = require('koa-compress');
const serve = require('koa-static');
const cache = require(path.join(__dirname, 'src', 'middleware', 'koa-static-cache'));
const app = new Koa();
const http = require('http')
const url = require('url')
const querystring = require('querystring')
const session = require('koa-session');

app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

app.use(compress());
app.use(session(CONFIG, app));
// 检查etag
app.use(cache(path.join(__dirname, 'public')));

app.use(serve(path.join(__dirname, 'public')));

// 拦截登录
app.use(async (ctx, next) => {
  let urlWithStringQuery = url.parse(ctx.url)
  if (urlWithStringQuery.pathname === '/blocks') {
    // 获取userName
    let qObj = querystring.parse(urlWithStringQuery.query)
    let userName = qObj.user;
    ctx.session.userName = userName
    let data = await new Promise((resolve, reject) => {
      const req = http.request({
        host: 'localhost',
        port: '8080',
        path: urlWithStringQuery.path,
        method: 'GET'
      }, res => {
        res.setEncoding('utf-8')
        let data = ""
        res.on('data', function (chunk) {
          data += chunk
        })
        res.on('end', function () {
          resolve(data)  
        })
      })
      req.end()
    })
    ctx.type = 'application/json;charset=UTF-8'
    ctx.body = data
  } else {
    await next()
  }
})

app.use(async (ctx) => {
  ctx.status = 404;
  ctx.body = "404 NOT FOUND";
})

app.on('error', (err, ctx) => {
  console.log(err);
});

app.listen(3000, () => {
  console.log('正在监听3000端口');
});