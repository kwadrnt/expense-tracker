import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MobileNav from './MobileNav'

import AddAccountModal from 'common/AddAccountModal'

import { ACCOUNTS_PATH } from 'constants/urls'

import AccountFromQueryType from 'types/accountFromQuery'

import { formatCurrency } from 'utils/numbers'

import styles from './header.module.scss'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            navIsOpen: false,
            modalIsOpen: false,
        }

        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleNav() {
        this.setState(({ navIsOpen }) => ({ navIsOpen: !navIsOpen }))
    }

    toggleModal() {
        this.setState(({ modalIsOpen }) => ({ modalIsOpen: !modalIsOpen }))
    }

    render() {
        const { navIsOpen, modalIsOpen } = this.state
        const { accounts } = this.props

        return (
            <div>
                <div className={cx(styles.banner, 'bg-red flex items-center justify-end')}>
                    <MobileNav
                        className={'dn-ns'}
                        accounts={accounts}
                        toggleModal={this.toggleModal} />
                </div>

                <div className={cx(styles.navBar, 'dn flex-ns flex-row')}>
                    <div className={'relative pointer'} onClick={this.toggleNav}>
                        <div className={cx(navIsOpen && 'bg-white', styles.navItem, 'h-100 flex items-center ph3')}>Accounts</div>

                        <div className={cx(navIsOpen ? 'flex' : 'dn', styles.menu, 'absolute flex-column bg-white shadow-5 pt2')}>
                            {accounts.map(({ id, name, balance }, idx) => (
                                <Link
                                    key={id}
                                    to={`/accounts/${id}`}
                                    className={idx === 0 && 'pt3', 'flex items-center justify-between pv2 ph3'}>
                                        <div>{name}</div>
                                        <div>{formatCurrency(balance)}</div>
                                </Link>
                            ))}

                            <div className={cx(styles.options, accounts.length > 0 && 'bt')}>
                                <div
                                    className={'flex items-center justify-between pv3 mh3'}
                                    onClick={this.toggleModal}>
                                    Add account
                                </div>

                                {accounts.length > 0 && (
                                    <Link
                                        to={ACCOUNTS_PATH}
                                        className={cx('flex items-center justify-between pv3 mh3')}>
                                        View all accounts
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <AddAccountModal isOpen={modalIsOpen} onClose={this.toggleModal} />
            </div>
        )
    }
}

Header.propTypes = {
    accounts: PropTypes.arrayOf(AccountFromQueryType),
}

export default Header
