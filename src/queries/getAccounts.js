import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import get from 'lodash/get'

const getAccounts = gql`
    query {
        getAccounts {
            id
            name
            balance
            transactions {
                id
                date
                description
                category {
                    id
                    name
                }
                price
                type
            }
        }
    }
`
export const withAccountsQuery = () => graphql(getAccounts, {
    alias: 'getAccounts',
    props: ({ data }) => {
        return {
            accounts: get(data, 'getAccounts')
        }
    },
})
