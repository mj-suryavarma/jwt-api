const CustomApiError = require('./custom-error');
const {StatusCodes} = require('http-status-codes')

class BadApiError extends CustomApiError{
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.BAD_REQUEST
    }
  }
  
  module.exports = BadApiError
  
  
////  we can use statusCode = 400 instead of external library or package
/// npm install http-status-codes --save