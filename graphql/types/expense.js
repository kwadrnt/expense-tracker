const {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
} = require('graphql')
const { GraphQLDate } = require('graphql-iso-date')

module.exports = {}

module.exports.ExpenseType = new GraphQLObjectType({
    name: 'Expense',
    description: 'This represents an expense',
    fields: () => {
        const { CategoryType } = require('./category.js')
        const { AccountType } = require('./account.js')

        return {
            id: { type: new GraphQLNonNull(GraphQLID) },
            date: { type: new GraphQLNonNull(GraphQLDate) },
            description: { type: GraphQLString },
            price: { type: new GraphQLNonNull(GraphQLFloat) },
            category: {
                type: CategoryType,
                description: 'The category this expense is under',
                resolve: () => {
                    return {}
                },
            },
            account: {
                type: AccountType,
                description: 'The account this expense belongs to',
                resolve: () => {
                    return {}
                },
            },
        }
    },
})
