import compose from 'recompose/compose'

import Header from 'components/common/Header'

import { withAccountsQuery } from 'queries/getAccounts'

const HeaderContainer = compose(
    withAccountsQuery(),
)(Header)

export default HeaderContainer
