import { Component } from 'react'
import './app.styles.scss'
import { BrowserRouter, Route, Switch } from 'react-router'
import FaithCollector from './components/FaithCollector'
class App extends Component {
  render() {
    return (
      // <div className='ui container'>
      //   <h1 className='ui header'>Tables</h1>
      //   <Tables />
      // </div>
      <main>
        <div className='ui container'>
          <FaithCollector></FaithCollector>
        </div>
      </main>
    )
  }
}

export default App
