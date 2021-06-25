// User router for hbase demo application

const express = require('express');
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('*', createProxyMiddleware({
    target: 'http://192.168.101.162',
    changeOrigin: true,
}))

router.get('/', (req, res) => {
    res.json({
        msg: 'Good'
    })
})

router.get('/test', (req, res) => {
    res.json({
        msg: 'testGood'
    })
})

router.get('/gender', (req, res) => {
    res.json([
        {
            count: 100
        }, {
            count: 30
        }
        
    ])
})

router.get('/group', (req, res) => {
    res.json([
        {
            gender: 'Boy',
            count: 23
        }, {
            job: 'Next',
            count: 21,
        }, {
            mariiage: 'door',
            count: 0
        }
    ])
})

router.get('/user/:id', (req, res) => {
    res.json([
        {
            name: 'Yajyu',
            age: 24,
            job: 'Student',
        }
    ])
})

router.get('/filter', (req, res) => {
    console.log(req.params)
    res.json([
        {
            "gender": "男",
            "nick_name": "",
            "index": 14,
            "id": "111",
            "email": "cxok1bzs6@gmail.com",
            "username": "空祥"
        },
        {
            "gender": "女",
            "nick_name": "",
            "index": 15,
            "id": "112",
            "email": "yceplcid@live.com",
            "username": "戈怡馥"
        },
        {
            "gender": "男",
            "nick_name": "",
            "index": 16,
            "id": "113",
            "email": "wqrwroqqf@live.com",
            "username": "谈岩"
        }
    ])
})

module.exports = router;