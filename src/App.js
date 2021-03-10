import { Component } from 'react'
import Tables from './components/Tables'

import './app.styles.scss'
class App extends Component {
  render() {
    return (
      <div className='ui container'>
        <h1 className='ui header'>Tables</h1>
        <Tables />
      </div>
    )
  }
}

export default App
