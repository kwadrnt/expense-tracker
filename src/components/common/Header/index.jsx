import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import MobileNav from './MobileNav'

import menuItems from 'constants/menuItems'

import styles from './header.module.scss'

const Header = () => (
    <div>
        <div className={cx(styles.banner, 'bg-red flex items-center justify-end')}>
            <MobileNav className={'dn-ns'} />
        </div>

        <div className={cx(styles.navBar, 'dn flex-ns flex-row')}>
            {
                menuItems.map(({ path, name }) => (
                    <Link key={path} to={path}>
                        <div className={cx(styles.navItem, 'h-100 flex items-center ph3')}>{name}</div>
                    </Link>
                ))
            }
        </div>
    </div>
)

export default Header
