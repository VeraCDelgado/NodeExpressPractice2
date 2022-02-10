const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', async(req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
    const users = await response.json();
    console.log(users);
    res.send('users');
})

module.exports = router;