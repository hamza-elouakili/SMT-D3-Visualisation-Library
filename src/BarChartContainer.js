import React, { Component } from 'react'
import BarChart from './BarChart'

class BarChartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [1, 2, 3, 4, 5], sizeData: 5 }
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  // componentDidMount() {
  //   const percentage = Math.random()
  //   this.setState({ percentComplete: percentage })
  // }

  handleKeyPress(event) {
    if (event.which === 13) {
      console.log(event.target.value)
      let valueStrings = event.target.value
      var array = valueStrings.split(',').map(Number)
      console.log(array)
      var lengthArray = array.length
      this.setState({ data: array, sizeData: lengthArray })
    }
  }

  render() {
    const divStyle = {
      border: '1px solid black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: 200,
      height: 300,
      marginRight: 10
    }

    const inputStyle = {
      marginBottom: 15
    }

    return (
      <div style={divStyle}>
        <h2>Bar Chart</h2>
        <input
          style={inputStyle}
          type="text"
          onKeyPress={this.handleKeyPress}
        />
        <BarChart
          data={this.state.data}
          sizeDataScale={100 / this.state.sizeData}
          size={[100, 100]}
        />
      </div>
    )
  }
}

export default BarChartContainer
