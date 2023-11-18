const express=require('express')
const Router=express.Router()
const bcrypt=require('bcryptjs')
const SignUp= require('../../model/auth/Sign.js')
Router.use(express.json())
Router.post('/SignUp',async (req,res)=>{
data=req.body
const user=new SignUp(data)
salt=await bcrypt.genSalt(10)
cryptedPassword= await bcrypt.hashSync(user.password,salt)
user.password=cryptedPassword
await user.save().then((user)=>{res.send(user)
console.log('تم التسجيل بنجاح')
});

})
module.exports=Router