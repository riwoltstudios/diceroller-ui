import { Component } from 'react'

// import './app.styles.scss'

class Table extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.tname}</td>
        <td>{this.props.last_role}</td>
      </tr>
    )
  }
}

export default Table
