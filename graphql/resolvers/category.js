const Categories = require('../../db/models/categories')
const Transactions = require('../../db/models/transactions')

const getCategories = () => Categories.find()

const getTransactions = (ownProps) => Transactions.find({ category: ownProps.id })

module.exports = {
    getCategories,
    getTransactions,
}
