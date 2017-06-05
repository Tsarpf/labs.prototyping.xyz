import React from 'baret'
import Bacon from 'baconjs'
import styles from './footer.css'
const seconds = Bacon.interval(1000).toProperty()
const Footer = () =>
  <div className={styles.footer}>
      The clock is ticking: {seconds.map(() => new Date().toISOString())}
  </div>

export default Footer
