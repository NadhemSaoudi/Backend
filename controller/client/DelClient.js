const express = require('express');
const Router = express.Router();
const delClent = require('../../model/client/DelClient');
Router.use(express.json());
Router.delete('/deleteClient/:id', async (req, res) => {
const id = req.params.id;
await delClent.findByIdAndDelete(id).then((user) => {
res.console.log('تم حذف الحريف  ').catch((err) => {console.log('حدث خطأ أثناء حذف الحريف')});

});




});

module.exports = Router;
