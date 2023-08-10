import {asyncError} from "../middleware/catchAsyncErrors.js"
import {User} from "../model/userModel.js"
import bcrypt from "bcryptjs";
import { ResetPasswordToken, sendCookie } from "../utils/jwtToken.js";
// import {sendEmail} from "../utils/sendEmail.js"

// register a User

export const registerUser = asyncError(async (req,res,next) =>{
    const {name,email,password} = req.body;
    let user = await User.findOne({email});
    if(user)
    {
        return res.status(500).json({
            success : false,
            message : "user already exists",
        })
    }
    
    // bcrypting 
    const hashedPassword = await bcrypt.hash(password,10);

    // create user
    user = await User.create({
        name,
        email,
        avtar:{
            public_id:"this is sample id",
            url:"profilePicUrl",
        },
        password:hashedPassword,
    })

    sendCookie(user,res,`welcome ${name}`,201);
})

// LOGIN USER 

export const loginUser = asyncError(async (req,res,next)=>{
    const {email,password} = req.body;

    //if user has not given email or password
    if(!email || !password)
    {
        return res.status(400).json({
            success:false,
            message:"Please enter both email and password"
        })
    }

    let user = await User.findOne({email}).select("+password");
    // console.log(email);
    // console.log(user._id.toString())

    if(!user)
    {
        return res.status(404).json({
            success:false,
            message:"Invalid email or password"
        })
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch)
    {
        return res.status(401).json({
            success:false,
            message:"Invalid email or password.Can not login"
        })
    }

    sendCookie(user,res,`welcome ${user.name}`,201);
})

//LOGOUT USER
export const logOutUser = asyncError((req,res)=>{

    res.cookie("token",null,{
        expires : new Date(Date.now()),
        httpOnly:true,
    });

    res.status(200).json({
        success:true,
        message:"user logged out successfuly",
    })
})


// FORGOT PASSWORD
export const forgotPassword = asyncError(async (req,res,next) => {
    const user = await User.findOne({email : req.body.email});
    if(!user)
    {
        return res.status(404).json({
            message:"user not found"
        })
    }

    // now get reset password token
    // const resetToken = ResetPasswordToken(user._id.toString());
    const resetToken = user.getResetPasswordToken();
    
    await user.save({ validateBeforeSave: false });
    // console.log(user.resetPasswordToken);

    const resetPasswordURL = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordURL} \n\n if you have not requested this email please ignore it`;
    // console.log(message)
    try {

        await sendEmail({
            email:user.email,
            subject : `Ecommerce password recovery`,
            message,
        })

        res.status(200).json({
            success:true,
            message : `Email sent to ${user.email} successfully`
        })
        
    } catch (error) {
        user.ResetPasswordToken = undefined;
        user.ResetPasswordExpire = undefined;
        await user.save({validateBeforeSave:false});

        return res.status(500).json({
            message:error.message,
        })

    }
})


// GET USER DETAILS

export const getUserDetails = asyncError(async (req,res,next)=>{
    const user = await User.findById(req.user._id);

    res.status(200).json({
        success:true,
        user,
    })
})

// UPDATE PASSWORD

export const updatePassword = asyncError(async(req,res,next)=>{
    const user = await User.findById(req.user._id).select("+password");
    console.log(user);
    const oldPassword = req.body.oldPassword;

    const isMatch = await bcrypt.compare(oldPassword,user.password);

    if(!isMatch)
    {
        return res.status(400).json({
            success:false,
            message:"old password is incorrect",
        })
    }

    const newPassword = req.body.newPassword;

    const confirmPassword = req.body.confirmPassword;

    if(newPassword!=confirmPassword)
    {
        return res.status(400).json({
            success:false,
            message:"password did not match",
        })
    }
    const hashedPassword = await bcrypt.hash(newPassword,10);

    user.password = hashedPassword;

    await user.save();

    sendCookie(user,res,"password changed",200);
})

// UPDATE USER PROFILE

export const updateProfile = asyncError(async(req,res,next)=>{
    const {name,email}=req.body;
    
    const newUserData = {
        name,
        email,
    }

    let user = await User.findOne({email}).select("+password");

    // console.log(user);
    if(user)
    {
        // console.log(email)
        return res.status(400).json({
            success:false,
            message:"Email already taken"
        })    
    }
    
    
    user = await User.findByIdAndUpdate(req.user._id,newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    });

    return res.status(200).json({
        success:true,
        message:"Profile Updated...."
    })
})

// GET ALL USERS -- ADMIN

export const getAllUsers = asyncError(async(req,res,next)=>{
    let users = await User.find();
    return res.status(200).json({
        users,
    })
})

// GET USER -- ADMIN

export const getUser = asyncError(async (req,res,next)=>{
    const user = await User.findById(req.params.id);

    if(!user)
    {
        return res.status(400).json({
            message:`user does not exist ${req.params.id}`
        })
    }

    return res.status(200).json({
        success:true,
        user,
    })
})

// UPDATE USER ROLE -- ADMIN

export const updateUserRole = asyncError(async(req,res,next)=>{
    const {role}=req.body;
    
    const newUserData = {
        role
    }
    
    let user = await User.findByIdAndUpdate(req.params.id,newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    });

    return res.status(200).json({
        success:true,
        message:"Profile Updated....",
        user
    })
})

// DELETE USER -- ADMIN


export const deleteUser = asyncError(async(req,res,next)=>{
    const user = await User.findById(req.params.id);

    if(!user)
    {
        return res.status(400).json({
            message:`user does not exist ${req.params.id}`
        })
    }

    await User.deleteOne({_id:req.params.id});

    res.status(200).json({
        success:true,
        message:"Profile Deleted"
    })
})