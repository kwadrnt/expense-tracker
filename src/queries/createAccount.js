import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import { getAccounts } from 'queries/getAccounts'

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
                refetchQueries: [ { query: getAccounts } ],
            })
        },
    }),
})
