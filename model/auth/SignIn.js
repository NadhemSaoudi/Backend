const mongoose = require('mongoose');
const SignIn = mongoose.model('SignIn', {


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






});