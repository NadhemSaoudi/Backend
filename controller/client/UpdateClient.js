const express = require('express');
const Router = express.Router();
Router.use(express.json());
const updateClient = require('../../model/client/UpdateCl');
Router.put('/updateClient/:id',async(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    const user=await updateClient.findByIdAndUpdate(id,data)
    res.send(user)
    
})
module.exports=Router