import React from 'baret'
import styles from './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/header.js'
import Footer from './components/footer.js'
import Home from './components/home.js'
import ProjectList from './components/project-list.js'

const Projects = require('./components/portal.js')
console.log(Projects)
const Pages = [
  [Home, '/', ''],
  [ProjectList, '/projects', 'Project list'],
  ...Projects
]

const Page = ({children, name, match, ...rest}) => {
  return <div>
          <Header currentPage={name} path={match.path}></Header>

            <div className={styles.content}>
              {children}
            </div>

          <Footer></Footer>
        </div>
}
const PageGen = (Component, name, address) => {
  return (props) => <Page {...props} name={name}>
    <Component projects={Projects} {...{name, address}}/>
  </Page>
}

const App = () =>
  <Router>
    <div className={styles.container}>
      {Pages.map(([Component, path, name, address], idx) =>
        <Route className={styles.container} exact path={path} key={idx} component={PageGen(Component, name, address)}/>
      )}
    </div>
  </Router>



export default App
