import { Component } from 'react'
import './app.styles.scss'
// import { BrowserRouter, Route, Switch } from 'react-router'
import FaithCollector from './components/FaithCollector'
import ResourceDisplay from './components/ResourceDisplay'
import TedVitalsDisplay from './components/TedVitalsDisplay'
import GameTickDisplay from './components/GameTickDisplay'
class App extends Component {
  render() {
    return (
      // <div className='ui container'>
      //   <h1 className='ui header'>Tables</h1>
      //   <Tables />
      // </div>
      <body className='flex flex-col min-h-screen '>
        <header></header>
        <main className='flex-grow'>
          <div className='m-8'>
            <div className='grid grid-flow-col grid-cols-3 grid-rows-1 gap-4'>
              <div>
                <ResourceDisplay></ResourceDisplay>
                <TedVitalsDisplay></TedVitalsDisplay>
              </div>
              <div>
                <FaithCollector></FaithCollector>
              </div>
              <div>
                <ResourceDisplay></ResourceDisplay>
              </div>
              {/* <ResourceDisplay></ResourceDisplay> */}
            </div>
          </div>
        </main>
        <footer className='border-t-2 border-gray-800'>
          <GameTickDisplay></GameTickDisplay>
        </footer>
      </body>
    )
  }
}

export default App
