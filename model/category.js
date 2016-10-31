var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    created_ad: {
        type: Date,
        default: Date.now
    }
});

var Category = mongoose.model('Category', categorySchema);

module.exports = Category;

// Get Categories
module.exports.getCategories = function (callback, limit) {
    Category.find({}, callback).limit(limit).sort([['titie', 'ascending']]);
}

module.exports.addCategory = function (data, callback) {
    Category.create(data, callback);
};

// Get Single Category