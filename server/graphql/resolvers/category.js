const Categories = require('../../db/models/categories')
const Transactions = require('../../db/models/transactions')

const getCategory = (_, { input }) => Categories.findOne({ id: input.id })
const getCategories = () => Categories.find()
const getTransactions = (ownProps) => Transactions.find({ category: ownProps.id })

module.exports = {
    getCategory,
    getCategories,
    getTransactions,
}
