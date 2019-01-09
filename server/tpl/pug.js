
module.exports = `
doctype html
html
  head
    meta(charset='utf-8')
    meta(name='viewport' content='width=device-width, initial-scale=1')
    title Koa server Html
    script(src='https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js')
    link(href='https://cdn.bootcss.com/twitter-bootstrap/4.1.2/css/bootstrap.css' rel='stylesheet')
    script(src='https://cdn.bootcss.com/twitter-bootstrap/4.1.2/js/bootstrap.bundle.js')
  body
    .container
      .row 
        .col-md-8
          h1 Hi #{ you }
          p This is #{ me }
        .col-md-4
          <p>测试 HTML 页面</p>
`