import jwt from "jsonwebtoken";
import crypto from "crypto"
import { User } from "../model/userModel.js";

export const sendCookie = (user,res,message,statusCode) =>{
    const token = jwt.sign({_id : user._id},process.env.JWT_SECRET);

    res.status(statusCode).cookie("token",token,{
        expires: new Date(
            Date.now() + 5*24*60*60*1000,
        ),
        httpOnly : true,

        // sameSite: "none",
        // secure : process.env.NODE_ENV === "development" true
    }).json({
        sucess : true,
        message,
        token,
    })

    console.log(token);
}

export const ResetPasswordToken = async function(userId){
    // generating token
    const resetToken = crypto.randomBytes(20).toString("hex");
    
    // accessing resetPasswordToken feild of that user.
    let user = await User.findById(userId)
    
    // hashing and add to userSchema
    user.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
    
    // user = await User.findById(userId)


    user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    await user.save({validateBeforeSave:false});


    return resetToken;

    
}
