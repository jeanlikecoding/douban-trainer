const Koa = require('koa')
const app = new Koa()
const { htmlTpl, ejsTpl, pugTpl } = require('./tpl')
// const ejs = require('ejs')
const pug = require('pug')

app.use(async ctx => {
  ctx.type = "text/html, charset=utf-8"
  ctx.body = pug.render(pugTpl, {
    you: 'Luke',
    me: 'Jean'
  })
})

app.listen(3333, () => {
  console.log(`your application is running at localhost:${3333}`)
})