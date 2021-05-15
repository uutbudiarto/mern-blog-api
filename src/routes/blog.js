const express = require('express');
const {body} = require('express-validator')

const router = express.Router();
const blogController = require('../controllers/blog');

router.post('/create',[
    body('title')
    .isLength({min: 5}).withMessage('input minimal 5 karakter'),
    body('body').isLength({min: 10}).withMessage('input minimal 10 karakter'),
],blogController.createBlog)

module.exports = router;