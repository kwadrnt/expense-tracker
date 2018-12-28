import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MobileNav from './MobileNav'

import { ACCOUNTS_PATH } from 'constants/urls'

import AccountFromQueryType from 'types/accountFromQuery'

import styles from './header.module.scss'

const Header = ({ accounts }) => (
    <div>
        <div className={cx(styles.banner, 'bg-red flex items-center justify-end')}>
            <MobileNav className={'dn-ns'} accounts={accounts} />
        </div>

        <div className={cx(styles.navBar, 'dn flex-ns flex-row')}>
            <Link to={ACCOUNTS_PATH}>
                <div className={cx(styles.navItem, 'h-100 flex items-center ph3')}>Accounts</div>
            </Link>
        </div>
    </div>
)

Header.propTypes = {
    accounts: PropTypes.arrayOf(AccountFromQueryType),
}

export default Header
