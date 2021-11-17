const jwt = require('jsonwebtoken');
const { BadApiError } = require('../errors');

const login = async (req, res) =>{
    const {username, password} = req.body;
    /// 3 ways validation methods
    /// mongoose validation
    // joi
    // check in the controller
    
    if(!username || !password){
     throw new BadApiError('please provide email and password');
    }
    /// just for demo it can do create by mongodb
    const id = new Date().getDate();
  // try to keep payload small, better experience for user
 const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'});
    res.status(200).json({msg:'token created',token})    
}

const dashboard = async (req,res) =>{
    console.log(req.user)  
    const luckyNumber = Math.floor(Math.random()*100);
        res.status(200).json({
            msg: `Hello ,${req.user.username}`,
             secret : `here is your authorisez data, your lucky number is ${luckyNumber} `});

    

}

module.exports = {
    login, dashboard,
}
