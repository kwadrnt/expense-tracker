const {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLList,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
} = require('graphql')
const { GraphQLDate } = require('graphql-iso-date')

const { ExpenseType } = require('../types/expense.js')

// Input Types
const ExpenseQueryInputType = new GraphQLInputObjectType({
    name: 'ExpenseQueryInputType',
    description: 'Expense payload definition for queries',
    fields: () => ({
        // userId: { type: new GraphQLNonNull(GraphQLID) },
        expenseId: { type: GraphQLID },
        categoryId: { type: GraphQLID },
        accountId: { type: GraphQLID },
        date: { type: GraphQLDate },
    }),
})

const ExpenseMutationInputType = new GraphQLInputObjectType({
    name: 'ExpenseMutationInputType',
    description: 'Expense payload definition for mutations',
    fields: () => ({
        // userId: { type: new GraphQLNonNull(GraphQLID) },
        expenseId: { type: GraphQLID },
        categoryId: { type: GraphQLID },
        accountId: { type: GraphQLID },
        date: { type: GraphQLDate },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
    }),
})

// Queries
module.exports = {}

module.exports.expenseQueries = {
    expenses: {
        type: new GraphQLList(ExpenseType),
        description: 'Get all expenses for the user or from a specific account',
        args: {
            input: { type: new GraphQLNonNull(ExpenseQueryInputType) },
        },
        resolve: (_, { input } ) => {
            return []
        },
    },
    expense: {
        type: ExpenseType,
        description: 'Get a specific expense',
        args: {
            input: { type: new GraphQLNonNull(ExpenseQueryInputType) },
        },
        resolve: (_, { input }) => {
            return {}
        },
    },
}

// Mutations

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
}
