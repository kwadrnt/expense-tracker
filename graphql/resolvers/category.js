const Categories = require('../../db/models/categories')

module.exports = {}

module.exports.findCategories = () => Categories.find()
