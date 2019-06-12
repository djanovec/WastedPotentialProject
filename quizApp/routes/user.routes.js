const express = require('express');
const router = express.Router();
const userAPI = require('../models/user.models')

router.post('/create', (req, res)=>{
    userAPI.createUser(req, res);
})

router.get('/login/:user', (req, res)=>{
    console.log('hit route');
    userAPI.login(req, res, req.params.user);
})

router.delete('/delete', (req, res)=>{
    userAPI.deleteUser(req, res);
})


module.exports = router;