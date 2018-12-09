import React from 'react'
import cx from 'classnames'

import styles from './app.module.scss'

const App = () => {
    return <div className={cx(styles.test, 'pa4')}>Hello World!</div>
}

export default App
