import React from 'baret'
import logo from './logo.svg'
import styles from './App.css'

import Header from './components/header.js'
import Footer from './components/footer.js'

const App = () =>
  <div className={styles.App}>
    <Header></Header>
    <div className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className={styles.intro}>
      test
    </p>

    <Footer></Footer>
  </div>


export default App
