const Movie = require('../../models/movies.js')

/**
 * Create
 * @class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.MovieModel = connect.model('Movie', Movie)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.post('/movie/create', (req, res) => {
      try {
        const movieModel = new this.MovieModel(req.body)
        // console.log(groupModel.save())
        
        movieModel.save().then(movie => {
          res.status(200).json(movie || {})
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        })
      } catch (err) {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      }
    })
  }

  /**
   * run
   */
  run () {
    this.middleware()
  }
}

module.exports = Create
