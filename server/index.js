const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.status = 200
  ctx.body = 'hello Movie'
})

app.listen(3333, () => {
  console.log(`your application is running at localhost:${3333}`)
})