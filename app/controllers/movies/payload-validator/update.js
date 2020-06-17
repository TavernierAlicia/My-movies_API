// Dependencies
const _ = require('node-validator')

module.exports = _.isObject()
  .withOptional('first_name', _.isString())
  .withOptional('last_name', _.isString())
  .withOptional('email', _.isString({
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/, 
    message: 'Invalid email'
  }))
  .withOptional('password', _.isString())
  .withOptional('age', _.isNumber({ min: 0, max: 130 }))
  .withOptional('gender', _.isString({
    regex: /^f|m$/gi,
    message: 'Invalid gender value'
  }))
  .withOptional('height', _.isNumber())
  .withOptional('weigth', _.isNumber())
  .withOptional('city', _.isString())
  .withOptional('cityCode', _.isString())
  .withOptional('street_number', _.isNumber())
  .withOptional('street_type', _.isString())
  .withOptional('street_name', _.isString())
  .withOptional('phone', _.isString({
    regex: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im, 
    message: 'Invalid phone number'
  }))
  .withOptional('image_profil', _.isString())
