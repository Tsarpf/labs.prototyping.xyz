import React from 'baret'
import {Link} from 'react-router-dom'

import spectre from '../../node_modules/spectre.css/docs/dist/spectre.css'

import _ from 'lodash'

const Breadcrumb = ({crumb}) => {
  const name = _.capitalize(crumb[crumb.length -1])
  const path = crumb.join('/')
  return <li className={spectre['breadcrumb-item']}> <Link to={`/${path}`}> {name}</Link> </li>
}

const Header = ({currentPage, path}) => {
  const paths = path.split('/').filter(e => e)

  const breadcrumbs = paths.map((elem, idx) => {
    return paths.slice(idx, paths.length - 1)
  })
  .filter(e=>e.length>0)

  return <div>
    <ul className={spectre.breadcrumb}>

      {path !== '/' ? <li className={spectre['breadcrumb-item']}> <Link to='/'> Home </Link> </li> : null}
      {breadcrumbs.map((b, idx) =>  <Breadcrumb key={idx} crumb={b}/>)}
      <li className={spectre['breadcrumb-item']}> <Link to={path}> {currentPage} </Link> </li>
    </ul>
  </div>
}

export default Header
