import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import MobileNav from './MobileNav'

import { ACCOUNTS_PATH } from 'constants/urls'

import styles from './header.module.scss'

const Header = () => (
    <div>
        <div className={cx(styles.banner, 'bg-red flex items-center justify-end')}>
            <MobileNav />
        </div>

        <div className={cx(styles.navBar, 'dn flex-ns flex-row')}>
            <Link to={ACCOUNTS_PATH}>
                <div className={cx(styles.navItem, 'h-100 flex items-center ph3')}>Accounts</div>
            </Link>
        </div>
    </div>
)

export default Header
