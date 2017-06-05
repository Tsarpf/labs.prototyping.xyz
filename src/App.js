import React from 'baret'
import styles from './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/header.js'
import Footer from './components/footer.js'
import Home from './components/home.js'
import RPS from './projects/rps.js'

const App = () =>
  <Router>
    <div className={styles.container}>
      <Header></Header>
        <div className={styles.content}>
            <Route exact path="/" component={Home}/>
            <Route path="/rps" component={RPS}/>
        </div>
      <Footer></Footer>
    </div>
  </Router>

export default App
