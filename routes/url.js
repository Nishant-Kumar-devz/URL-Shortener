const express = require('express');
const { handelRedirect, handelGenerateShortUrl, handelAnalytic } = require('../controllers/url');
const route = express.Router();

route.get('/:shortUrl',handelRedirect).post('/',handelGenerateShortUrl).get('/analytics/:shortUrl',handelAnalytic)

module.exports = route;