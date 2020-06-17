const Movie = require('../../models/movies.js')

/**
 * Create
 * @class
 */
class List {
  constructor (app, connect) {
    this.app = app
    this.MovieModel = connect.model('Movie', Movie)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.get('/movie/list', (req, res) => {
      try {
        this.MovieModel.find().then(movie => {
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

module.exports = List
