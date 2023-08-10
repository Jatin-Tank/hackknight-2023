import {asyncError} from "./catchAsyncErrors.js";
import jwt from "jsonwebtoken";
import {User} from "../model/userModel.js"


export const isAuthenticated = asyncError(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token)
    {
        return res.status(401).json({
            success : false,
            message : "Please login first"
        })
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);// here we assign user data to req.user

    next();
})

export const authorizeRoles = (roles)=>{
    // console.log(roles);
    return (req,res,next)=>{
        if(roles!=req.user.role) // if the user is other than admin then this condition will execute. req.user contains users data.
        {
            return next(
                res.status(403).json({
                message : `${req.user.role} is not allowed to access this resource`,
                })
            )
        }

        next();
    }
}