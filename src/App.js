import React from 'baret'
import styles from './App.css'

import Header from './components/header.js'
import Footer from './components/footer.js'

const App = () =>
  <div className={styles.container}>
    <Header></Header>

    <div className={styles.content}>
      <p>
        test, insert router stuff inside here
      </p>
    </div>


    <Footer></Footer>
  </div>

export default App
