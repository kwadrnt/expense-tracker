import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MobileNav from './MobileNav'

import AccountFromQueryType from 'types/accountFromQuery'

import styles from './header.module.scss'

const Header = ({ accounts }) => (
    <div>
        <div className={cx(styles.banner, 'bg-red flex items-center justify-end')}>
            <MobileNav className={'dn-ns'} accounts={accounts} />
        </div>

        <div className={cx(styles.navBar, 'dn flex-ns flex-row')}>
            asdf
        </div>
    </div>
)

Header.propTypes = {
    accounts: PropTypes.arrayOf(AccountFromQueryType),
}

export default Header
