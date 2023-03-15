const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('admin/dashboard');
})

Router.get('/template', (req, res) => {
    return res.render("admin/template");
})

module.exports = Router;