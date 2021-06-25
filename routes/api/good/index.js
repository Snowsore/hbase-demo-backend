// User router for hbase demo application

const express = require('express');
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('*', createProxyMiddleware({
    target: 'http://192.168.101.162',
    changeOrigin: true,
}))

module.exports = router;