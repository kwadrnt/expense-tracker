const {
    GraphQLFloat,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')
const { GraphQLDate } = require('graphql-iso-date')

const {
    ExpenseMutationInputType,
    ExpenseQueryInputType,
    ExpenseType,
} = require('../types/expense')

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
        resolve: (_, { input }) => {
            return {}
        },
    },
    getExpenses: {
        type: new GraphQLList(ExpenseType),
        description: 'Get all expenses for the user or from a specific account',
        args: {
            input: { type: new GraphQLNonNull(ExpenseQueryInputType) },
        },
        resolve: (_, { input } ) => {
            return []
        },
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
        resolve: (_, { input }) => {
            return {}
        },
    },
    deleteExpense: {
        type: ExpenseType,
        description: 'Delete an existing expense',
        args: {
            input: { type: new GraphQLNonNull(ExpenseMutationInputType) },
        },
        resolve: (_, { input }) => {
            return {}
        },
    },
    updateExpense: {
        type: ExpenseType,
        description: 'Update an existing expense',
        args: {
            input: { type: new GraphQLNonNull(ExpenseMutationInputType) },
        },
        resolve: (_, { input }) => {
            return {}
        },
    },
}

