var express = require('express');
var router = express.Router();

const { createProxyMiddleware } = require('http-proxy-middleware');

router.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to HBase demo backend API server'
    })
})
router.use('/auth', require('./auth'))
router.use('/users', require('./users'))
router.use('/goods', require('./goods'))
router.use('/logs', require('./logs'))
router.use('/orders', require('./orders'))

// router.use('/user', createProxyMiddleware({
//     target: 'http://localhost:5000',
//     changeOrigin: true,
//     pathRewrite: {'^/user' : ''}
// }))

module.exports = router;
