//http://api.douban.com/v2/movie/subject
const rp = require('request-promise-native')

async function fetchMovie (item) {
  const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`

  const res = await rp(url)

  return res
}
;(async () => {
    let movies = [
      {
        doubanId: 3286531,
        title: '老友记  第三季',
        rate: 9.7,
        poster:
          'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2195389285.jpg'
      },
      {
        doubanId: 4321270,
        title: '猫和老鼠',
        rate: 9.7,
        poster:
          'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2247237724.jpg'
      } 
    ]

    movies.map(async movie => {
      let movieData = await fetchMovie(movie)

      try {
        movieData = JSON.parse(movieData)
      } catch (error) {
        console.log(error)
      }
      //console.log(movieData)
    })
})()