const Movie = require('../../models/movies.js')

/**
 * Create
 * @class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.MovieModel = connect.model('Movie', Movie)

    this.run()
  }

  /**
   * middleware
   */
  middleware () {
    this.app.delete('/movie/delete/:id', (req, res) => {
      const { id } = req.params
      this.MovieModel.findByIdAndDelete({ _id: id }, (err, result) => {
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

module.exports = Delete
