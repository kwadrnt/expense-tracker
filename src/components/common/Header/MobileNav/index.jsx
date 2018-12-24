import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cx from 'classnames'

import menuItems from 'constants/menuItems'

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
        const { className } = this.props

        return (
            <div className={cx(className, 'overflow-x-hidden')}>
                <div
                    className={'ph3'}
                    onClick={this.toggleButton}>
                    <div className={cx(open && styles.change, styles.hamburgerOne)} />
                    <div className={cx(open && styles.change, styles.hamburgerTwo)} />
                    <div className={cx(open && styles.change, styles.hamburgerThree)} />
                </div>

                <div className={cx(open && styles.show, styles.menu, 'bg-white b')}>
                    {
                        menuItems.map(({ path, name }) => (
                            <Link key={path} to={path}>
                                <div className={cx(styles.navItem, 'flex items-center ph4 pv3')}>{name}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}

MobileNav.propTypes = {
    className: PropTypes.string,
}

export default MobileNav
