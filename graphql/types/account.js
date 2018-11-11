const {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLList,
    GraphQLObjectType,
    GraphQLNonNull,
} = require('graphql')

module.exports = {}

module.exports.AccountType = new GraphQLObjectType({
    name: 'Account',
    description: 'This repsents an account',
    fields: () => {
        const { ExpenseType } = require('./expense.js')

        return {
            id: {type: new GraphQLNonNull(GraphQLID)},
            name: {type: new GraphQLNonNull(GraphQLString)},
            balance: {type: new GraphQLNonNull(GraphQLFloat)},
            expenses: {
                type: new GraphQLList(ExpenseType),
                description: 'List of all Expenses',
                resolve: () => {
                    return []
                },
            },
        }
    },
})
