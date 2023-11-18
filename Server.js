const express= require('express')
require('./connect.js')
const app=express()
const AddClient=require('./controller/client/AddClient')
const Rendezvous =require('./controller/rendezvous/Ajoutrendezvous')
const DeleteClient=require('./controller/client/DelClient')
const UpdateClient=require('./controller/client/UpdateClient')
const GetClient=require('./controller/client/GetClient')
const SignIn =require('./controller/auth/SignIn')
const SignUp =require('./controller/auth/SignUp.js')
app.use(express.json())
app.listen(3000,()=>{console.log('yekhdem jawo behi serveru port 3000 ');})

app.use('/AddClient',AddClient)
app.use('/Rendezvous',Rendezvous)
app.use('/DeleteClient',DeleteClient)
app.use('/UpdateClient',UpdateClient)
app.use('/GetClient',GetClient)
app.use('/SignIn',SignIn)
app.use('/SignUp',SignUp)



