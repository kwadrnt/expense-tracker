const uuid = require('uuid/v4')
const sum = require('lodash/sum')
const round = require('lodash/round')

const Accounts = require('../../db/models/accounts')
const Transactions = require('../../db/models/transactions')
const TransactionTypes = require('../../db/models/transactionTypes')

const createAccount = (_, { input }) => Accounts.create({ ...input, id: uuid() })
const deleteAccount = (_, { input }) => Accounts.findOneAndDelete({ id: input.id })
const getAccount = (_, { input }) => Accounts.findOne({ id: input.id })
const getAccounts = () => Accounts.find()

const getBalance = (ownProps) => {
    return getTransactions(ownProps)
        .then((transactions) => {
            const transactionPrices = transactions.map((transaction) => {
                return TransactionTypes.findOne({ id: transaction.type })
                    .then((transactionType) => {
                        switch(transactionType.name) {
                            case 'EXPENSE':
                                return -(transaction.price)
                            case 'INCOME':
                                return transaction.price
                            case 'TRANSFER':
                                return transaction.accountFrom === ownProps.id
                                    ? -(transaction.price)
                                    : transaction.price
                        }
                    })
            })

            return Promise.all(transactionPrices)
                .then((res) => {
                    return round(sum(res), 2)
                })
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
