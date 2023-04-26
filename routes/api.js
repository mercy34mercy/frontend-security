const express = require('express');
const router = require('express').Router();

const allowList = [
    "http://localhost:3000",
    "http://site.example:3000"
]

router.use((req, res, next) => {
    //originはhttp://localhost:3000で指定すること、httpをなくしたり、/をつけたりするとエラーになる
    if(req.headers.origin && allowList.includes(req.headers.origin)){ 
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
    //これがあることでプレフライトリクエストが飛んでくる
    if (req.method == "OPTIONS") {
        res.header('Access-Control-Allow-Headers', 'X-Token');
    }
    next();
});


router.get('/', (req, res) => {
    res.send('Hello World!');
});


module.exports = router;