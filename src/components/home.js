import React from 'react'
import {Link} from 'react-router-dom'
import styles from './home.css'

const Home = () =>
      <div className="stuff">
        <ul>
          <li className={styles.list}> <Link to={'/projects'}> All projects </Link> </li>
          <li className={styles.list}> <a href={'https://rabid.prototyping.xyz'}> Blog </a> </li>
        </ul>
      </div>

export default Home
