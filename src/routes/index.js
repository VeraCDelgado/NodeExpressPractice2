const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Vera",
        "ciudad": "Leon"
    };
    res.json(data);

});

module.exports = router;