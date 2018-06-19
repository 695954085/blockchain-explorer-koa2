const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');
const compress = require('koa-compress');
const app = new Koa();

app.use(compress());

app.use(serve(path.join(__dirname, 'public')))

app.use(async (ctx) => {
  ctx.status = 404;
  ctx.body = "404 NOT FOUND"
})

app.on('error', (err, ctx) => {
  console.log(err);
});

app.listen(3000, () => {
  console.log('正在监听3000端口');
});