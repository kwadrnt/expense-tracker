import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import get from 'lodash/get'

import transformAccount from 'queries/utils/transformAccount'

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
                type {
                    id
                    name
                }
            }
        }
    }
`
export const withAccountsQuery = () => graphql(getAccounts, {
    alias: 'getAccounts',
    props: ({ data }) => {
        return {
            accounts: transformAccount(get(data, 'getAccounts')),
        }
    },
})
