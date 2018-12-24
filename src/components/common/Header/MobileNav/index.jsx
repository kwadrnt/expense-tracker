import React from 'react'
import cx from 'classnames'

import styles from './mobile-nav.module.scss'

class MobileNav extends React.Component {
    constructor(props) {
        super(props)

        this.state = { open: false }

        this.toggleButton = this.toggleButton.bind(this)
    }

    toggleButton() {
        this.setState(({ open }) => ({ open: !open }));
    }

    render() {
        const { open } = this.state
        const { className } = this.props

        return (
            <div 
                className={cx(className, 'ph3')}
                onClick={this.toggleButton}>
                <div className={cx(open && styles.change, styles.hamburgerOne)}/>
                <div className={cx(open && styles.change, styles.hamburgerTwo)}/>
                <div className={cx(open && styles.change, styles.hamburgerThree)}/>
            </div>
        )
    }
}

export default MobileNav
