const {
    GraphQLList,
    GraphQLNonNull,
} = require('graphql')

const {
    ExpenseMutationInputType,
    ExpenseQueryInputType,
    ExpenseType,
} = require('../types/expense')

const {
    getExpense,
    getExpenses,
    createExpense,
    updateExpense,
    deleteExpense,
} = require('../resolvers/expense')
module.exports = {}

// *******
// QUERIES
// *******
module.exports.expenseQueries = {
    getExpense: {
        type: ExpenseType,
        description: 'Get a specific expense',
        args: {
            input: { type: new GraphQLNonNull(ExpenseQueryInputType) },
        },
        resolve: getExpense,
    },
    getExpenses: {
        type: new GraphQLList(ExpenseType),
        description: 'Get all expenses for the user or from a specific account',
        resolve: getExpenses,
    },
}

// *********
// MUTATIONS
// *********
module.exports.expenseMutations = {
    createExpense: {
        type: ExpenseType,
        description: 'Create a new expense',
        args: {
            input: { type: new GraphQLNonNull(ExpenseMutationInputType) },
        },
        resolve: createExpense,
    },
    deleteExpense: {
        type: ExpenseType,
        description: 'Delete an existing expense',
        args: {
            input: { type: new GraphQLNonNull(ExpenseMutationInputType) },
        },
        resolve: deleteExpense,
    },
    updateExpense: {
        type: ExpenseType,
        description: 'Update an existing expense',
        args: {
            input: { type: new GraphQLNonNull(ExpenseMutationInputType) },
        },
        resolve: updateExpense,
    },
}

