const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.render('admin/dashboard');
})

Router.get('/template', (req, res) => {
    return res.render("admin/template");
})

Router.get('/message', (req, res) => {
    return res.render("admin/message");
})

Router.get('/statistic', (req, res) => {
    return res.render("admin/statistic");
})

module.exports = Router;