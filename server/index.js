const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const { resolve } = require('path')

app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}))

app.use(async ctx => {
  await ctx.render('index', {
    you: 'Luke',
    me: 'Scott'
  })
})

app.listen(3333, () => {
  console.log(`your application is running at localhost:${3333}`)
})