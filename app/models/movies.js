const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  path: String,
  description: String
}, {
  collection: 'movies',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = MovieSchema
