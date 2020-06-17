const Movie = require('../../models/movies.js')

/**
 * Create
 * @class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.MovieModel = connect.model('Movie', Movie)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.put('/movie/update/:id', (req, res) => {
      const { id } = req.params
      const { body } = req
      this.MovieModel.findByIdAndUpdate({ _id: id }, body, (err, result) => {
        if (err) {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        } else {
          res.status(200).json(Object.assign({}, result))
        }
      })
    })
  }

  /**
   * run
   */
  run () {
    this.middleware()
  }
}

module.exports = Update
