const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/getClients', async (req, res) => {
    try {
        const collection = mongoose.connection.db.collection('client'); 
        const clients = await collection.find({}).toArray();

        res.json(clients); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching clients' });
    }
});

module.exports = router;
