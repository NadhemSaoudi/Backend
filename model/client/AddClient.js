const mongoose = require('mongoose');
const AddClient=mongoose.model('AddClient',{
    name:{
         type:String,
            required:true,
            trim:true,
            minlength: 3,
            maxlength: 20,
            validate(value){
                 if(!validator.isAlpha(value)){
                      throw new Error('الاسم غير صالح')
                 }
            }
    },
         
     surname:{
            type:String,
            required:true,
            trim:true,
            minlength: 3,
            maxlength: 20,
            validate(value){
                 if(!validator.isAlpha(value)){
                      throw new Error('اللقب غير صالح')
                 }
            }


     },
     phone:{
          type:String,
            required:true,
            trim:true,
            minlength: 8,
            maxlength: 20,
            validate(value){
                 if(!validator.isMobilePhone(value)){
                      throw new Error('الهاتف غير صالح')
                 }
            }

            
        
     
     },
     cin:{
          type:String,
          required:true,
          trim:true,
          minlength:8,
            maxlength:20,
            validate(value){
                 if(!validator.isNumeric(value)){
                      throw new Error('الرقم الوطني غير صالح')
                 }
            }
      
     },
     email :{
          type:String,
          required:true,
          trim:true,
          minlength:3,
            maxlength:20,
            validate(value){
                 if(!validator.isEmail(value)){
                      throw new Error('الايميل غير صالح')
                 }
            }
     },
        address:{
            type:String,
            required:true,
            trim:true,
            minlength:3,
                maxlength:20,
                validate(value){
                    if(!validator.isAlpha(value)){
                        throw new Error('العنوان غير صالح')
                    }
                }
        },

})
module.exports=AddClient;