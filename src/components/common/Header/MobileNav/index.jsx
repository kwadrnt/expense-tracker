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

        console.log('open: ', open)

        return (
            <div>
                <div 
                    className={'ph3'}
                    onClick={this.toggleButton}>
                    <div className={cx(open && styles.change, styles.hamburgerOne)}/>
                    <div className={cx(open && styles.change, styles.hamburgerTwo)}/>
                    <div className={cx(open && styles.change, styles.hamburgerThree)}/>
                </div>
            </div>
        )
    }
}

export default MobileNav
