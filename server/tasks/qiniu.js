
const qiniu = require('qiniu')
const nanoid = require('nanoid')
const config = require('../config')


const bucket = config.qiniu.bucket
const mac = new qiniu.auth.digest.Mac(config.qiniu.AK, config.qiniu.SK)
const cfg = new qiniu.conf.Config()
const client = new qiniu.rs.BucketManager(mac, cfg)

const uploadToQiniu = async (url, key) => {
  return new Promise((resolve, reject) => {
    client.fetch(url, bucket, key, (err, ret, info) => {
      if (err) {
        reject(err)
      } else {
        if (info.statusCode === 200) {
          resolve({ key })
        } else {
          reject(info)
        }
      }
    })
  })
}

  ; (async () => {
    let movies = [
      {
        video: 'http://vt1.doubanio.com/201901161522/c48051fa841817ca9ec880abe7a76ef7/view/movie/M/302190491.mp4',
        doubanId: '4120658',
        cover: 'https://img1.doubanio.com/img/trailer/medium/2493603388.jpg',
        poster: 'https://img1.doubanio.com/img/trailer/medium/2493603388.jpg'
      }
    ]

    movies.map(async movie => {
      if (movie.video && !movie.videoKey) {
        try {
          console.log('开始传 video')
          let videoData = await uploadToQiniu(movie.video, nanoid() + '.mp4')
          console.log('开始传 cover')
          let coverData = await uploadToQiniu(movie.cover, nanoid() + '.png')
          console.log('开始传 poster')
          let posterData = await uploadToQiniu(movie.poster, nanoid() + '.png')

          if (videoData.key) {
            movie.videoKey = videoData.key
          }
          if (coverData.key) {
            movie.coverKey = coverData.key
          }
          if (posterData.key) {
            movie.posterKey = posterData.key
          }

          console.log(movie)

        } catch (err) {
          console.log(err)
        }
      }
    })
  })()
