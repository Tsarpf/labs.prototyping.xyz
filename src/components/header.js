import React from 'baret'
import styles from './header.css'
import {Link} from 'react-router-dom'

const Header = () =>
  <div className={styles.header}>
    <ul className={styles.list}>
      <li> <Link to="/"> Back home </Link> </li>
      <li> <Link to="/rps"> Rock paper scissors </Link> </li>
    </ul>
  </div>

export default Header
