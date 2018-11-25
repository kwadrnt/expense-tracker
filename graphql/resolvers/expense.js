const uuid = require('uuid/v4')

const Accounts = require('../../db/models/accounts')
const Expenses = require('../../db/models/expenses')

module.exports.getExpense = (_, { input }) => Expenses.findOne({ id: input.id })
module.exports.getExpenses = () => Expenses.find()
module.exports.createExpense = (_, { input }) => Expenses.create({ ...input, id: uuid() })
module.exports.updateExpense = (_, { input }) => Expenses.findOneAndUpdate({ id: input.id }, input, { new: true })
module.exports.deleteExpense = (_, { input }) => Expenses.findOneAndDelete({ id: input.id })

module.exports.getAccount = (id) => Accounts.findOne({ id })
