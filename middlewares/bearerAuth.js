'use strict';

const { UserModal } = require("../modules/index");
/* istanbul ignore next */
module.exports = async (req, res, next) => {
  if( !req.headers.authorization ) (
    next('Invalid login')
  )
  console.log("bearerAuth>>>>>>",req.headers.authorization)
  try {
    const token = req.headers.authorization.split(' ')[1];
     if(!token){
      console.log("The token is Empy");
     }
    const validUser = UserModal.authenticateToken(token);
    console.log("VALID>>>>>>>>>",validUser);
    const userInfo = await UserModal.findOne({where: {username: validUser.username}});
    console.log('USERINFO>>>>>>>',userInfo.token)
    if(userInfo) {
      req.user = userInfo;
      req.token = userInfo.token;

      next();
    } else {
      next('Invalid login')
    }

  } catch(e) {
    next(e.message || e)
  }
}









