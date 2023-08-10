import mongoose from "mongoose";
import validator from "validator";
import crypto from "crypto"


const schema =mongoose.Schema({
    name : {
        type:String,
        required:[true,"please provide name"],
        maxLength:[30,"cannot exceed 30 letters"],
        minLenght:[4,"name should have more than 4 characters"]
    },
    email : {
        type : String,
        required:[true,"please provide email"],
        unique:true,
        validate:[validator.isEmail,"please enter the correct email"],
    },
    password : {
        type : String,
        required:[true,"please provide password"],
        minLenght :[8,"password should be more 8 characters"],
        select:false,
    },
    avtar:{
        public_id:{
            type : String,
            required : true,
        },
        url:{
            type : String,
            required : true,
        }
    },
    role : {
        type : String,
        default:"user",
    },

    resetPasswordToken:String,
    resetPasswordExpire:Date,

})

// Generating Password Reset Token
schema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  
    return resetToken;
  };

export const User = mongoose.model("User",schema);
