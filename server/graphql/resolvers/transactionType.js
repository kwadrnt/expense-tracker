const Transactions = require('../../db/models/transactions')

const getTransactions = (ownProps) => Transactions.find({ type: ownProps.id })

module.exports = {
    getTransactions,
}
