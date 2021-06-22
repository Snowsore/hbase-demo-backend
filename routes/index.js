var express = require('express');
var router = express.Router();

const { createProxyMiddleware } = require('http-proxy-middleware');

const authRouter = require('./auth')
const usersRouter = require('./users')

router.use('/auth', authRouter)
router.use('/users', usersRouter)

// router.use('/user', createProxyMiddleware({
//     target: 'http://localhost:5000',
//     changeOrigin: true,
//     pathRewrite: {'^/user' : ''}
// }))

module.exports = router;
