const {
    GraphQLFloat,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql')

module.exports = {}

// ****************
// Constructor Type
// ****************
module.exports.AccountType = new GraphQLObjectType({
    name: 'Account',
    description: 'This repsents an account',
    fields: () => {
        const { ExpenseType } = require('./expense')

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

// ***********
// Input Types
// ***********
module.exports.AccountMutationInputType = new GraphQLInputObjectType({
    name: 'AccountMutationInputType',
    description: 'Account payload definition for mutations',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        balance: { type: GraphQLFloat },
    }),
})

module.exports.AccountQueryInputType = new GraphQLInputObjectType({
    name: 'AccountQueryInputType',
    description: 'Account payload definition for queries',
    fields: () => ({
        id: { type: GraphQLID },
    }),
})

