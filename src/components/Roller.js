import { Component } from 'react'

// import './app.styles.scss'

class Roller extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: {},
    }
  }
  roll = () => {
    // Lets do an API call to get the data
    const self = this
    fetch('/api/tables/' + this.props.table_name + '/user1/roll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        self.setState({ result: data })
      })
  }
  render() {
    return (
      <div>
        {/* {this.state.result.value} */}
        <button className="ui button" onClick={this.roll}>Roll</button>
      </div>
    )
  }
}

export default Roller
