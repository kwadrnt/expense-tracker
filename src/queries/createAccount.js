import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import get from 'lodash/get'
import withHandlers from 'recompose/withHandlers'

import { getAccounts } from 'queries/getAccounts'
import transformAccount from 'queries/utils/transformAccount'

export const createAccount = gql`
    mutation createAccount($input: AccountMutationInputType!) {
        createAccount(input: $input) {
            id
            name
            balance
        }
    }
`

export const withCreateAccount = graphql(createAccount, {
    props: ({ mutate }) => ({
        createAccount: (data) => { 
            return mutate({ 
                variables: { input: data },
                refetchQueries: [{ query: getAccounts }],
            })
        },
    }),
})
