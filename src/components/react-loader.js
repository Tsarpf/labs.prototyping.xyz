import React from 'react'

const lazyLoaders = {
  'Rock Paper Scissors': require('bundle-loader?lazy!../projects/rps/src/App.js') // eslint-disable-line
}

class Loader extends React.Component {
  constructor(props) {
    super()
    console.log(props.address)
    console.log('asdf')
    this.state = {
      app: () => null
    }
  }
  componentWillMount() {
    lazyLoaders[this.props.name](app => {
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

export default Loader
