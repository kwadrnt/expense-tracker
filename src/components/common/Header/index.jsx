import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MobileNav from './MobileNav'

import { ACCOUNTS_PATH } from 'constants/urls'

import AccountFromQueryType from 'types/accountFromQuery'

import { formatCurrency } from 'utils/numbers'

import styles from './header.module.scss'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = { open: false }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState(({ open }) => ({ open: !open }))
    }

    render() {
        const { open } = this.state
        const { accounts } = this.props

        return (
            <div>
                <div className={cx(styles.banner, 'bg-red flex items-center justify-end')}>
                    <MobileNav className={'dn-ns'} accounts={accounts} />
                </div>

                <div className={cx(styles.navBar, 'dn flex-ns flex-row')}>
                    <div className={'relative pointer'} onClick={this.toggleMenu}>
                        <div className={cx(open && 'bg-white', styles.navItem, 'h-100 flex items-center ph3')}>Accounts</div>

                        <div className={cx(open ? 'flex' : 'dn', styles.menu, 'absolute flex-column bg-white shadow-5 pt2')}>
                            {accounts.map(({ id, name, balance }, idx) => (
                                <Link
                                    key={id}
                                    to={`/accounts/${id}`}
                                    className={idx === 0 && 'pt3', 'flex items-center justify-between pv2 ph3'}>
                                        <div>{name}</div>
                                        <div>{formatCurrency(balance)}</div>
                                </Link>
                            ))}

                            <Link
                                to={ACCOUNTS_PATH}
                                className={cx(styles.viewAll, 'flex items-center justify-between pv3 mh3 bt')}>
                                View all accounts
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    accounts: PropTypes.arrayOf(AccountFromQueryType),
}

export default Header
