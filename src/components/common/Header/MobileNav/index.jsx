import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { ACCOUNTS_PATH } from 'constants/urls'

import AccountFromQueryType from 'types/accountFromQuery'

import { formatCurrency } from 'utils/numbers'

import styles from './mobile-nav.module.scss'

class MobileNav extends React.Component {
    constructor(props) {
        super(props)

        this.state = { open: false }

        this.toggleButton = this.toggleButton.bind(this)
    }

    toggleButton() {
        this.setState(({ open }) => ({ open: !open }))
    }

    render() {
        const { open } = this.state
        const { className, accounts } = this.props

        return (
            <div className={cx(className, 'overflow-x-hidden')}>
                <div
                    className={'ph3'}
                    onClick={this.toggleButton}>
                    <div className={cx(open && styles.change, styles.hamburgerOne)} />
                    <div className={cx(open && styles.change, styles.hamburgerTwo)} />
                    <div className={cx(open && styles.change, styles.hamburgerThree)} />
                </div>

                <div className={cx(open && styles.show, styles.menu, 'bg-white')}>
                    <div onClick={this.toggleButton}>
                        <Link
                            to={ACCOUNTS_PATH}
                            className={cx(styles.navItem, 'flex items-center bb pa3')}>
                            Accounts
                        </Link>

                        {accounts.map(({ id, name, balance }) => (
                            <Link
                                key={id}
                                to={`/accounts/${id}`}
                                className={cx(styles.navItem, 'flex items-center justify-between bb pv3 ph4')}>
                                    <div>{name}</div>
                                    <div>{formatCurrency(balance)}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

MobileNav.propTypes = {
    accounts: PropTypes.arrayOf(AccountFromQueryType),
    className: PropTypes.string,
}

export default MobileNav
