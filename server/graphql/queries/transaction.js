const { GraphQLList, GraphQLNonNull } = require('graphql')

const {
    getTransaction,
    getTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
} = require('../resolvers/transaction')

const {
    TransactionMutationInputType,
    TransactionQueryInputType,
    TransactionType,
} = require('../types/transaction')

// *******
// QUERIES
// *******
const transactionQueries = {
    getTransaction: {
        type: TransactionType,
        description: 'Get a specific transaction',
        args: {
            input: { type: new GraphQLNonNull(TransactionQueryInputType) },
        },
        resolve: getTransaction,
    },
    getTransactions: {
        type: new GraphQLList(TransactionType),
        description: 'Get all transactions for the user or from a specific account',
        resolve: getTransactions,
    },
}

// *********
// MUTATIONS
// *********
const transactionMutations = {
    createTransaction: {
        type: TransactionType,
        description: 'Create a new transaction',
        args: {
            input: { type: new GraphQLNonNull(TransactionMutationInputType) },
        },
        resolve: createTransaction,
    },
    deleteTransaction: {
        type: TransactionType,
        description: 'Delete an existing transaction',
        args: {
            input: { type: new GraphQLNonNull(TransactionMutationInputType) },
        },
        resolve: deleteTransaction,
    },
    updateTransaction: {
        type: TransactionType,
        description: 'Update an existing transaction',
        args: {
            input: { type: new GraphQLNonNull(TransactionMutationInputType) },
        },
        resolve: updateTransaction,
    },
}

module.exports = {
    transactionQueries,
    transactionMutations,
}

