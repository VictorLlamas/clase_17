const express = require('express');
const app = express();
const router = express.Router();

router.get('/login', function(req, res){
    console.log('login');
})


router.get('/logout', function(req, res){
    console.log('logout');
})


router.get('/recovery', function(req, res){
    console.log('recovery');
})


app.use('/auth', router);