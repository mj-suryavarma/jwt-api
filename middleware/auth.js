const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

const authonticationMiddleware = (req,res,next) =>{
    const authHeader =  req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        console.log(authHeader)
        throw new UnauthenticatedError('No token Provide')
        // throw new CustomApiError('No token Provide',401) // don't need to pass status code
    }
    const token = authHeader.split(" ")[1]
    console.log(token)
   
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        const {id, username} = decode;
        req.user = {id,username}
        
    } catch(error){
      throw new UnauthenticatedError('Not Authorized to access this route')

    }
    next();
}

module.exports = authonticationMiddleware;
