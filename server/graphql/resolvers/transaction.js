const uuid = require('uuid/v4')

const Accounts = require('../../db/models/accounts')
const Categories = require('../../db/models/categories')
const Transactions = require('../../db/models/transactions')
const TransactionTypes = require('../../db/models/transactionTypes')

const createTransaction = (_, { input }) => Transactions.create({ ...input, id: uuid() })
const deleteTransaction = (_, { input }) => Transactions.findOneAndDelete({ id: input.id })
const getAccount = (ownProps, accountType) => Accounts.findOne({ id: ownProps[accountType] })
const getCategory = ({ category }) => Categories.findOne({ id: category })
const getTransaction = (_, { input }) => Transactions.findOne({ id: input.id })
const getTransactionType = ({ type }) => TransactionTypes.findOne({ id: type })
const getTransactions = () => Transactions.find()
const updateTransaction = (_, { input }) => Transactions.findOneAndUpdate({ id: input.id }, input, { new: true })

module.exports = {
    createTransaction,
    deleteTransaction,
    getAccount,
    getCategory,
    getTransaction,
    getTransactionType,
    getTransactions,
    updateTransaction,
}
