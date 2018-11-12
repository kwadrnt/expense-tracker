const { GraphQLList, GraphQLObjectType, GraphQLSchema } = require('graphql')

const { accountMutations, accountQueries } = require('./queries/account')
const { categoryQueries } = require('./queries/category')
const { expenseMutations, expenseQueries } = require('./queries/expense')

module.exports = new GraphQLSchema({
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            ...accountMutations,
            ...expenseMutations,
        },
    }),
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            ...accountQueries,
            ...categoryQueries,
            ...expenseQueries,
        },
    }),
})
