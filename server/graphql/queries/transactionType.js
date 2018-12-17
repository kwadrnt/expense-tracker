const { GraphQLNonNull } = require('graphql')

const { getTransactionType } = require('../resolvers/transactionType')
const { TransactionTypeType, TransactionTypeQueryInputType } = require('../types/transactionType')

// *******
// QUERIES
// *******
const transactionTypeQueries = {
    getTransactionType: {
        type: TransactionTypeType,
        description: 'Get a specific transaction type',
        args: {
            input: { type: new GraphQLNonNull(TransactionTypeQueryInputType) },
        },
        resolve: getTransactionType,
    },
}

module.exports = {
    transactionTypeQueries,
}
