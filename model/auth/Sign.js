const mongoose = require('mongoose');
const Sign=mongoose.model('Sign',{

mail:{
    type:String,
    required:true,
    trim:true,
    minlength: 3,
    maxlength: 20,
    validate(value){
         if(!validator.isEmail(value)){
              throw new Error('البريد الالكتروني غير صالح')
         }
    }
},
password:{
    type:String,
    required:true,
    trim:true,
    minlength: 8,
    maxlength: 20,
    validate(value){
         if(!validator.isStrongPassword(value)){
              throw new Error('كلمة السر غير صالحة')
         }
    }
},
cin:{
    type:String,
    required:true,
    trim:true,
    minlength: 8,
    maxlength: 8,
    validate(value){
         if(!validator.isNumeric(value)){
              throw new Error('الرقم الوطني غير صالح')
         }
    }
},






})
module.exports=Sign;