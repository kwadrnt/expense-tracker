const uuid = require('uuid/v4')

const Accounts = require('../../db/models/accounts')
const Expenses = require('../../db/models/expenses')

module.exports.getExpense = (_, { input }) => Expenses.findOne(input)
module.exports.getExpenses = () => Expenses.find()
module.exports.createExpense = (_, { input }) => Expenses.create({ ...input, id: uuid() })
module.exports.updateExpense = (_, { input }) => Expenses.findOneAndDelete(input)
module.exports.deleteExpense = (_, { input }) => Expenses.findOneAndUpdate({ id: input.id }, input, { new: true })
module.exports.getAccount = (ownProps) => Accounts.findOne({ id: ownProps.account })
