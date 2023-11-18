const moongoose = require('mongoose');
const DelClient = moongoose.model('DelClient',{

cin :{
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








});
module.exports=DelClient;


