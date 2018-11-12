const { GraphQLList, GraphQLObjectType, GraphQLSchema } = require('graphql')

const { accountMutations, accountQueries } = require('./queries/account.js')
const { categoryQueries } = require('./queries/category.js')
const { expenseMutations, expenseQueries } = require('./queries/expense.js')

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
