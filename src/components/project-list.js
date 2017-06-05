import React from 'react'
import {Link} from 'react-router-dom'

const ProjectList = ({projects}) =>
      <div>
        <LinkList links={projects}/>
      </div>

const LinkList = ({links}) => {
    return <ul>
      {links.map((link, idx) => <li key={idx} className={''}> <Link to={link[1]}> {link[2]} </Link> </li>)}
    </ul>
}

export default ProjectList
