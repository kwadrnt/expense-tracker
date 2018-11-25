const uuid = require('uuid/v4')

const Accounts = require('../../db/models/accounts')
const Transactions = require('../../db/models/transactions')

const getTransaction = (_, { input }) => Transactions.findOne({ id: input.id })
const getTransactions = () => Transactions.find()
const createTransaction = (_, { input }) => Transactions.create({ ...input, id: uuid() })
const updateTransaction = (_, { input }) => Transactions.findOneAndUpdate({ id: input.id }, input, { new: true })
const deleteTransaction = (_, { input }) => Transactions.findOneAndDelete({ id: input.id })

const getAccount = (id) => Accounts.findOne({ id })

module.exports = {
    getTransaction,
    getTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
    getAccount,
}
