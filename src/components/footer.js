import React from 'baret'
import Bacon from 'baconjs'
import styles from './footer.css'
const seconds = Bacon.interval(1000).toProperty()
const Footer = () =>
  <div className={styles.footer}>
    I'm a footer
  </div>

export default Footer
