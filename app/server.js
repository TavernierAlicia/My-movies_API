const express = require('express')
const routes = require('./controllers/routes.js')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

/**
 * Server
 * @Class
 */
class Server {
  constructor () {
    this.app = express()
    this.port = 3000
  }

  /**
   * db connect
   * @return {Object} connect
   */
  dbConnect () {
    const host = 'mongodb://127.0.0.1:27017/myMovies'
    const connect = mongoose.createConnection(host)

    connect.on('error', (err) => {
      setTimeout(() => {
        console.log('[ERROR] api dbConnect() -> mongodb error')
        this.connect = this.dbConnect(host)
      }, 5000)

      console.error(`[ERROR] api dbConnect() -> ${err}`)
    })

    connect.on('disconnected', () => {
      setTimeout(() => {
        console.log('[DISCONNECTED] api dbConnect() -> mongodb disconnected')
        this.connect = this.dbConnect(host)
      }, 5000) 
    })

    process.on('SIGINT', () => {
      connect.close(() => {
        console.log('[API END PROCESS] api dbConnect() -> close mongodb connection ')
        process.exit(0)
      })
    })

    return connect
  }

  /**
   * middleware
   */
  middleware () {
    this.app.use(cors())
    this.app.use(bodyParser.urlencoded({ 'extended': true }))
    this.app.use(bodyParser.json())
  }

  /**
   * routes
   */
  routes () {
    new routes.movies.Create(this.app, this.connect)
    new routes.movies.Update(this.app, this.connect)
    new routes.movies.Delete(this.app, this.connect)
    new routes.movies.List(this.app, this.connect)

    this.app.use((req, res) => {
      res.status(404).json({
        'code': 404,
        'message': 'Not Found'
      })
    })
  }

  /**
   * run
   */
  run () {
    try {
      this.connect = this.dbConnect()
      this.dbConnect()
      this.middleware()
      this.routes()
      this.app.listen(this.port)
      console.info(`[INFO] Server is running on port ${this.port}`)
    } catch (err) {
      console.error(`[ERROR] Server -> ${err}`)
    }
  }
}

module.exports = Server
