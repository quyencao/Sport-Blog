var express = require('express');
var router = express.Router();

var Category = require('../model/category');

router.get('/', function(req, res, next) {
    Category.getCategories(function (err, categories) {
        if(err) {
            res.send(err);
        }
        res.render('categories', { title: 'All Categories', categories: categories });
    });
});

router.post('/add', function (req, res, next) {
    req.checkBody('title', 'Title is required').notEmpty();

    var errors = req.validationErrors();
    if(errors) {
        // Render add_category again with errors
        res.render('add_category', {
            title:'Add Category',
            errors: errors
        });
    } else {
        var category = new Category();
        category.title = req.body.title;
        category.description = req.body.description;
        Category.addCategory(category, function (err, newCategory) {
            if(err) {
                res.send(err);
            } else {
                req.flash('success', 'Category Saved');
                res.redirect('/manage/categories');
            }
        });
    }
});

module.exports = router;
