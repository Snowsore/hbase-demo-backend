// User router for hbase demo application

const express = require('express');
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');

const cors = require('cors')
router.use(cors({
    origin: 'http://test.com',
    optionsSuccessStatus: 200
}))

// router.use('*', createProxyMiddleware({
//     target: 'http://192.168.101.162',
//     changeOrigin: true,
//     pathRewrite: {'^/user' : ''}
// }))

router.get('/', (req, res) => {
    res.json({
        msg: 'Good'
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

router.get('/personal/:id', (req, res) => {
    res.json([
        {
            name: 'Yajyu',
            age: 24,
            job: 'Student',
        }
    ])
})

module.exports = router;