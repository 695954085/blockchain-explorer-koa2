const fresh = require('fresh')
const fs = require('mz/fs')
const etag = require('etag')
const {
  parse, resolve
} = require('path')
/**
 * Module exports.
 */
module.exports = exports = {}
module.exports = cache

function cache(root) {

  return async function (ctx, next) {
    let done = false;
    if (ctx.method === 'GET' || ctx.method === 'HEAD') {
      let path = ctx.path;
      // 首先检查这个文件是否存在
      let trailingSlash = path[path.length - 1] === '/'
      let index = 'index.html'
      path = path.substr(parse(path).root.length)
      // index file support
      if (index && trailingSlash) path += index
      path = resolve(root, path)
      try {
        let stats = await fs.stat(path)
        if (stats.isFile()) {
          setHeader(ctx.res, stats)
          if (isFresh(ctx.req, ctx.res)) {
            notModified(ctx.res)
            done = true;
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (!done) {
      await next()
    }
  }
}

function notModified (res) {
  res.statusCode = 304
  res.end()
}

function isFresh(req, res) {
  return fresh(req.headers, {
    'etag': res.getHeader('ETag'),
    'last-modified': res.getHeader('Last-Modified')
  })
}

function setHeader(res, stats) {
  res.setHeader('Last-Modified', stats.mtime.toUTCString())
  res.setHeader('ETag', etag(stats))
}