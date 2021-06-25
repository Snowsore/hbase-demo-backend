var express = require('express');
var router = express.Router();

const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('/auth', require('./auth'))
router.use('/users', require('./user'))
router.use('/goods', require('./good'))
router.use('/logs', require('./log'))
router.use('/orders', require('./order'))

// router.use('/user', createProxyMiddleware({
//     target: 'http://localhost:5000',
//     changeOrigin: true,
//     pathRewrite: {'^/user' : ''}
// }))

module.exports = router;
