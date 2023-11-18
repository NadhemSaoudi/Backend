const express = require('express');
const Router = express.Router();
const bcrypt = require('bcryptjs');
const SignUp = require('../../model/auth/Sign.js');

Router.use(express.json());

Router.post('/SignIn', async (req, res) => {
  const { mail, password } = req.body;

  try {
    const user = await SignUp.findOne({ mail });

    if (!user) {
      return res.status(404).json({ message: 'اسم المستخدم غير صحيح' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'كلمة سر خاطئة' });
    }

    res.status(200).json({ message: 'اتصال ناجح' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'خطأ في الاتصال' });
  }
});

module.exports = Router;
