const router = require('express').Router();

router.get('/add-cat', (req, res) => {
    res.render('addCat')
})

module.exports = router;