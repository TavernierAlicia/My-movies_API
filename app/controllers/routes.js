const CreateMovie = require('./movies/create.js')
const UpdateMovie = require('./movies/update.js')
const DeleteMovie = require('./movies/delete.js')
const ListMovie = require('./movies/list.js')

module.exports = {
  /*
  users: {
    Create: CreateUser,
    Show: ShowUser,
    Update: UpdateUser,
    Delete: DeleteUser,
    List: ListUser
  },
  */
  movies: {
    Create: CreateMovie,
    Update: UpdateMovie,
    Delete: DeleteMovie,
    List: ListMovie
  }
}
