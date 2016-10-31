var express = require('express');
var router = express.Router();

router.get('/articles', function(req, res, next) {
    res.render('manage_articles', { title: 'Manage Articles' });
});

router.get('/categories', function(req, res, next) {
    res.render('manage_categories', { title: 'Manage Categories' });
});

router.get('/article/add', function(req, res, next) {
    res.render('add_article', { title: 'Add Article' });
});

router.get('/category/add', function(req, res, next) {
    res.render('add_category', { title: 'Add Category' });
});

router.get('/article/edit/:id', function(req, res, next) {
    res.render('edit_article', { title: 'Edit Article' });
});

router.get('/category/edit/:id', function(req, res, next) {
    res.render('edit_category', { title: 'Edit Category' });
});

module.exports = router;
