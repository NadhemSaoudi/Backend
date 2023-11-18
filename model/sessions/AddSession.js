const moongoose = require('mongoose');
const DelSession = moongoose.model('DelSession',{
    name:{
         type:String,
         required:true,
         trim:true,
         minlength: 3,
         maxlength: 20,
         validate(value){
              if(!validator.isAlpha(value)){
                   throw new Error('اسم الجلسة غير صالح')
              }
         }
    },
    time :{
         type:String,
         required:true,
         trim:true,
         minlength: 3,
         maxlength: 20,
         validate(value){
              if(!validator.isAlpha(value)){
                   throw new Error('الوقت غير صالح')
              }
         }
    },





});
module.exports=DelSession;