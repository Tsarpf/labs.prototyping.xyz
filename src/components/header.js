import React from 'baret'
import Bacon from 'baconjs'
import styles from './header.css'
const seconds = Bacon.interval(1000).toProperty()
const Header = () =>
  <div className={styles.header}>
      The clock is ticking: {seconds.map(() => new Date().toISOString())}
  </div>

export default Header
