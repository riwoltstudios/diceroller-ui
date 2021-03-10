import { Component } from 'react'
import Table from './Table'

class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tables: [
        {
          name: 'My Dicey Table',
          last_role: 'Yesterday',
        },
        {
          name: 'My Dicey3 Table',
          last_role: 'Today',
        },
      ],
    }
  }
  componentDidMount() {
    // Lets do an API call to get the data

    const self = this
    fetch('/api/tables')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const d = data.map((r) => ({ name: r.name, last_role: r.id }))
        console.log(d)
        self.setState({ tables: d })
      })
  }
  render() {
    const tables = this.state.tables
    return (
      <table className='ui celled table'>
        <thead>
          <tr>
            <th>Table Name</th>
            <th>Last Role</th>
          </tr>
        </thead>

        <tbody>
          {tables.map((t) => (
            <Table key={t.name} tname={t.name} last_role={t.last_role}></Table>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Tables
