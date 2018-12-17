const uuid = require('uuid/v4')

const Accounts = require('../../db/models/accounts')
const Categories = require('../../db/models/categories')
const Transactions = require('../../db/models/transactions')
const TransactionTypes = require('../../db/models/transactionTypes')

const createTransaction = (_, { input }) => Transactions.create({ ...input, id: uuid() })
const deleteTransaction = (_, { input }) => Transactions.findOneAndDelete({ id: input.id })
const getAccount = (id) => Accounts.findOne({ id })
const getCategory = (id) => Categories.findOne({ id })
const getTransaction = (_, { input }) => Transactions.findOne({ id: input.id })
const getTransactionType = (id) => TransactionTypes.findOne({ id })
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
