const Categories = require('../../db/models/categories')
const Expenses = require('../../db/models/expenses')

module.exports = {}

module.exports.getCategories = () => Categories.find()

module.exports.getExpenses = (ownProps) => Expenses.find({ category: ownProps.id })
