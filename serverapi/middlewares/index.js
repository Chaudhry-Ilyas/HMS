// import expressjwt from "express-jwt";

// export const requireLogin = expressjwt({
//       getToken: (req, res) => req.cookies.token,
      
//       secret: process.env.JWT_SECRET_KEY,
//       algorithms: ["HS256"],
// });



const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try{
       //let token = null;
       /* get token from header "react - userend axiosInstance" */
       
       //token = req.headers.authorization.split(" ")[1];
    //    const token = req.header("authorization").split(" ")[1];
    //    const token = req.header("authorization");
       const {verfyToken} = req.body;
       console.log('tkn',verfyToken);
       const decryptedToken = jwt.verify(verfyToken, process.env.JWT_SECRET_KEY);
       console.log('current user',decryptedToken);
       req.userId = decryptedToken._id;
       next();
    } catch(error) {
        // if(error.name === "JsonWebTokenError"){
        //     return next(createError.Unauthorized())
        // }
        res.send({
            success: false,
            message: 'Unathurized token'
        });
    }
};