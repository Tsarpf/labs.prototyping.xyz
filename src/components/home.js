import React from 'react'
import {Link} from 'react-router-dom'

const Home = () =>
      <div className="stuff">
        <h1>
          Welcome
        </h1>

        <ul>
          <li className={''}> <Link to={'/projects'}> All projects </Link> </li>
        </ul>
      </div>

export default Home
