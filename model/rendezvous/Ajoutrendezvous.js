const mongoose = require('mongoose');
const Ajoutrendezvous=mongoose.model('Ajoutrendezvous',{

date :{
type: Date,
required:true
}

})
module.exports=Ajoutrendezvous

