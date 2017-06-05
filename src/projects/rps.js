import React from 'react'
import lazyLoad from 'bundle-loader?lazy!./rps/src/App.js' // eslint-disable-line

class RPSLoader extends React.Component {
  constructor(props) {
    super()
    this.state = {
      app: () => null
    }
  }
  componentWillMount() {
    lazyLoad(app => {
      this.setState(() => {return {app: app.default}})
    })
  }
  componentWillUnmount() {
      this.setState(() => {app: null})
  }
  render() {
    const App = this.state.app
      return <div>
        <App/>
      </div>
  }
}

export default RPSLoader
