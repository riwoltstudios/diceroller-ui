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
