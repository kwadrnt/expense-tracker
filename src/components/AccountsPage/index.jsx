import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AccountFromQueryType from 'types/accountFromQuery'

import { formatCurrency } from 'utils/numbers'

import styles from './accounts-page.module.scss'

const AccountsPage = ({ accounts }) => (
    <div className={'ph3 pv4 fitScreen'}>
        <div className={styles.container}>
            {accounts && accounts.map(({ id, name, balance }) => (
                <Link
                    key={id}
                    to={`/accounts/${id}`}
                    className={cx(styles.accountItem, 'flex items-center justify-between pv3 ph3')}>
                    <div>{name}</div>
                    <div>{formatCurrency(balance)}</div>
                </Link>
            ))}
        </div>
    </div>
)

AccountsPage.propTypes = {
    accounts: PropTypes.arrayOf(AccountFromQueryType),
}

export default AccountsPage
