import compose from 'recompose/compose'

import AccountsPage from 'components/AccountsPage'

import { withAccountsQuery } from 'queries/getAccounts'

const AccountsPageContainer = compose(
    withAccountsQuery(),
)(AccountsPage)

export default AccountsPageContainer
