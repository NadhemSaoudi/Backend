const express=require('express')
const Router=express.Router()
const addClent= require('../../model/client/AddClient')
Router.use(express.json())

Router.post('/addClent',async (req,res)=>{
    data=req.body
    
    const user=new addClent(data)
    await user.save().then((user)=>{res.send(user)
        console.log('تمت إضافة الحريف بنجاح')
    }).catch((err)=>{console.log('حدث خطأ أثناء إضافة الحريف')})
    
   
})
module.exports=Router