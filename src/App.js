import { Component } from 'react'
import Tables from './components/Tables'
import Table from './components/Table'
import './app.styles.scss'
import { BrowserRouter, Route, Switch } from 'react-router'
class App extends Component {
  render() {
    return (
      // <div className='ui container'>
      //   <h1 className='ui header'>Tables</h1>
      //   <Tables />
      // </div>
      <main>
        <div className='ui container'>
          <Switch>
            <Route path="/tables" component={Tables} exact/>
            <Route path="/tables/:table_name" component={Table}/>
          </Switch>
        </div>
      </main>
    )
  }
}

export default App
