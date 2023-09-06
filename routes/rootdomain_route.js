const express = require('express');
const router = express.Router();

// Define routes for the root domain
router.get('/', (req, res) => {
    res.render('rootdomain', {
        title: 'Welcome to the Main Domain',
    });
});

// You can add other routes for the root domain as needed

module.exports = router;
