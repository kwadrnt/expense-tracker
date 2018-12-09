import React from 'react'
import cx from 'classnames'

import Container from 'common/Container'

import styles from './app.module.scss'

const App = () => (
    <Container>
        <div className={cx(styles.test, 'pa4')}>Hello World!</div>
    </Container>
)

export default App
