import React from 'react'
import compose from 'recompose/compose'
import withProps from 'recompose/withProps'

import AccountsPage from 'components/AccountsPage'

import { withAccountsQuery } from 'queries/getAccounts'

const AccountsPageContainer = compose(
    withAccountsQuery(),
)(AccountsPage)

export default AccountsPageContainer
