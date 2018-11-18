const {
    GraphQLList,
    GraphQLNonNull,
} = require('graphql')

const {
    AccountMutationInputType,
    AccountQueryInputType,
    AccountType,
} = require('../types/account')

const {
    getAccount,
    getAccounts,
    createAccount,
    deleteAccount,
    updateAccount,
} = require('../resolvers/account')

module.exports = {}

// *******
// QUERIES
// *******
module.exports.accountQueries = {
    getAccount: {
        type: AccountType,
        description: 'Get a specific account',
        args: {
            input: { type: new GraphQLNonNull(AccountQueryInputType) },
        },
        resolve: getAccount,
    },
    getAccounts: {
        type: new GraphQLList(AccountType),
        description: 'Get all accounts',
        resolve: getAccounts,
    },
}

// *********
// MUTATIONS
// *********
module.exports.accountMutations = {
    createAccount: {
        type: AccountType,
        description: 'Create a new account',
        args: {
            input: { type: new GraphQLNonNull(AccountMutationInputType) },
        },
        resolve: createAccount,
    },
    deleteAccount: {
        type: AccountType,
        description: 'Delete an existing account',
        args: {
            input: { type: new GraphQLNonNull(AccountMutationInputType) },
        },
        resolve: deleteAccount,
    },
    updateAccount: {
        type: AccountType,
        description: 'Update an existing account',
        args: {
            input: { type: new GraphQLNonNull(AccountMutationInputType) },
        },
        resolve: updateAccount,
    },
}
