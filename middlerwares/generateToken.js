const jwt = require("jsonwebtoken");
const User = require('../models/UserModel.js');
const asyncHandler = require('express-async-handler')
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};



const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if(req?.headers?.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(" ")[1];
      try{
          if(token) {
              const decoded = jwt.verify(token, process.env.JWT_SECRET);
              const user = await User.findById(decoded?.id);
              req.user = user;
              next();
          }
      }catch(error) {
          throw new Error("Not Authorized token expired, Please Login again")
      }
  }else {
      throw new Error("There is no token attached to header")
  }
});



module.exports = { generateToken, authMiddleware };