const uuid = require('uuid/v4')

const Accounts = require('../../db/models/accounts')
const Transactions = require('../../db/models/transactions')

const createAccount = (_, { input }) => Accounts.create({ ...input, id: uuid() })
const deleteAccount = (_, { input }) => Accounts.findOneAndDelete({ id: input.id })
const getAccount = (_, { input }) => Accounts.findOne({ id: input.id })
const getAccounts = () => Accounts.find()

const getBalance = (ownProps) => {
    return getTransactions(ownProps)
        .then((transactions) => {
            let balance = 0

            transactions.forEach((transaction) => {
                switch(transaction.type) {
                    case 'EXPENSE':
                        balance = balance - transaction.price
                        break
                    case 'INCOME':
                        balance = balance + transaction.price
                        break
                    case 'TRANSFER':
                        balance = transaction.accountFrom === ownProps.id
                            ? balance - transaction.price
                            : balance + transaction.price
                        break
                }
            })

            return balance
        })
}

const getTransactions = (ownProps) => {
    return Transactions.find({ accountFrom: ownProps.id })
        .then((transactions) => {
            return Transactions.find({ accountTo: ownProps.id})
                .then((transfers) => {
                    return transactions.concat(transfers)
                })
        })
}

const updateAccount = (_, { input }) => Accounts.findOneAndUpdate({ id: input.id }, input, { new: true })

module.exports = {
    createAccount,
    deleteAccount,
    getAccount,
    getAccounts,
    getBalance,
    getTransactions,
    updateAccount,
}
