const uuid = require('uuid/v4')

const Accounts = require('../../db/models/accounts')
const Expenses = require('../../db/models/expenses')

module.exports = {}

module.exports.getAccount = (_, { input }) => Accounts.findOne(input)
module.exports.getAccounts = () => Accounts.find()
module.exports.createAccount = (_, { input }) => Accounts.create({ ...input, id: uuid() })
module.exports.deleteAccount = (_, { input }) => Accounts.findOneAndDelete(input),
module.exports.updateAccount = (_, { input }) => Accounts.findOneAndUpdate({ id: input.id }, input, { new: true })
module.exports.getExpenses = (ownProps) => Expenses.find({ account: ownProps.id })
