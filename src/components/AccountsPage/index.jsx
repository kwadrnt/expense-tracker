import React from 'react'
import PropTypes from 'prop-types'

import AccountFromQueryType from 'types/accountFromQuery'

const AccountsPage = ({ accounts }) => (
    <div className={'ph3 pv4'}>
        {accounts && accounts.map(({ id, name }) => (
            <div key={id}>{name}</div>
        ))}
    </div>
)

AccountsPage.propTypes = {
    accounts: PropTypes.arrayOf(AccountFromQueryType),
}

export default AccountsPage
