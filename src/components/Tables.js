import { Component } from 'react'


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
      <div>
        <h1 className='ui header'>Tables</h1>
        <table className='ui celled table'>
          <thead>
            <tr>
              <th>Table Name</th>
              <th>Last Role</th>
            </tr>
          </thead>

          <tbody>
            {tables.map((t) => (
              <tr key={t.name}>
                <td>{t.name}</td>
                <td>{t.last_role}</td>
              </tr>
              
              // <Table key={t.name} tname={t.name} last_role={t.last_role}></Table>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Tables
