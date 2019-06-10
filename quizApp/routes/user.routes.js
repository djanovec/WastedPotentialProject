const express = require('express');
const router = express.Router();
const userAPI = require('../models/user.models')

router.post('/create', (req, res)=>{
    userAPI.createUser(req, res);
})

router.get('/login', (req, res)=>{
    userAPI.login(req, res);
})

router.delete('/delete', (req, res)=>{
    userAPI.deleteUser(req, res);
})


module.exports = router;