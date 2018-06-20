const Koa = require('koa');
const path = require('path');
const compress = require('koa-compress');
const serve = require('koa-static');
const cache = require(path.join(__dirname,'src','middleware','koa-static-cache'));
const app = new Koa();

app.use(compress());

// 检查etag
app.use(cache(path.join(__dirname, 'public')));

app.use(serve(path.join(__dirname, 'public')));
// app.use(koaStatic(path.join(__dirname,'public')));

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