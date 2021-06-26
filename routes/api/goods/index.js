// User router for hbase demo application

const express = require('express');
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('*', createProxyMiddleware({
    target: process.env.PROXY,
    changeOrigin: true,
}))

module.exports = router;