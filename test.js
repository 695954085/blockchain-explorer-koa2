// dependencies
const Koa = require('koa')
const proxy = require('koa-proxies')
const httpsProxyAgent = require('https-proxy-agent')

const app = new Koa()

// middleware
app.use(proxy('/octocat', {
  target: 'https://github.com',    
  changeOrigin: true,
  agent: new httpsProxyAgent('http://127.0.0.1:1337'),
  rewrite: path => {
    console.log(path)
    return '/vagusX/koa-proxies';
  },
  logs: true
}))

app.listen(3000)