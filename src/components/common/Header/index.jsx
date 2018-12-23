import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import { ACCOUNTS_PATH } from 'constants/urls'

import styles from './header.module.scss'

const Header = () => (
    <div>
        <div className={cx(styles.banner, 'bg-red')} />

        <div className={cx(styles.navBar, 'flex flex-row')}>
            <Link to={ACCOUNTS_PATH}>
                <div className={cx(styles.navItem, 'h-100 flex items-center ph3')}>Accounts</div>
            </Link>
        </div>
    </div>
)

export default Header
