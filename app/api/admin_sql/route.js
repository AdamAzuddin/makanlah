const express = require('express');
const router = express.Router();

router.post('/admin_sql', (req, res) => {
    const { money, id, name, email, password, address } = req.body;
    // Handle the data as needed
    console.log('Received data:', { money, id, name, email, password, address });
    res.json({ message: 'Data received successfully' });
});

module.exports = router;