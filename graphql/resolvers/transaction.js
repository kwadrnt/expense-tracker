const uuid = require('uuid/v4')

const Accounts = require('../../db/models/accounts')
const Transactions = require('../../db/models/transactions')

const createTransaction = (_, { input }) => Transactions.create({ ...input, id: uuid() })
const deleteTransaction = (_, { input }) => Transactions.findOneAndDelete({ id: input.id })
const getAccount = (id) => Accounts.findOne({ id })
const getTransaction = (_, { input }) => Transactions.findOne({ id: input.id })
const getTransactions = () => Transactions.find()
const updateTransaction = (_, { input }) => Transactions.findOneAndUpdate({ id: input.id }, input, { new: true })


module.exports = {
    createTransaction,
    deleteTransaction,
    getAccount,
    getTransaction,
    getTransactions,
    updateTransaction,
}
