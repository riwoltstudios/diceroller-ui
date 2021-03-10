import { Component } from 'react'
import Roller from './Roller'
// import './app.styles.scss'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rolls: [],
    }
  }
  componentDidMount() {
    // Lets do an API call to get the data

    const self = this
    fetch('/api/tables/' + this.props.match.params.table_name)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // const d = data.map((r) => ({ name: r.name, last_role: r.id }))
        // console.log(d)
        self.setState({ rolls: data })
      })
  }
  render() {
    const table_name = this.props.match.params.table_name;
    return (
      <div>
        {table_name}
        <ul>
          {this.state.rolls.map((roll) => 
            <li key={roll.id}>{roll.value} - {roll.user_id} - {roll.timestamp}</li>
          )}
        </ul>
        <Roller table_name={table_name}></Roller>
      </div>
    )
  }
}

export default Table
