const Koa = require('koa')
const app = new Koa()
const tpl = require('./tpl')

app.use(async ctx => {
  ctx.type = "text/html, charset=utf-8"
  ctx.body = tpl.normal
})

app.listen(3333, () => {
  console.log(`your application is running at localhost:${3333}`)
})