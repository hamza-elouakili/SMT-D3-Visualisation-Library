import React, { Component } from 'react'
import BarChart from './BarChart'
import Container from './Container'

class BarChartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [1, 2, 3, 4, 5], sizeData: 5, avg: 3 }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.sumOfArray = this.sumOfArray.bind(this)
  }

  // componentDidMount() {
  //   const percentage = Math.random()
  //   this.setState({ percentComplete: percentage })
  // }

  handleKeyPress(event) {
    if (event.which === 13) {
      console.log(event.target.value)
      let valueStrings = event.target.value
      let array = valueStrings.split(',').map(Number)
      console.log(array)
      let lengthArray = array.length
      let sumOfArrayValue = this.sumOfArray(array)
      let avgArray = (sumOfArrayValue / lengthArray).toFixed(2)
      this.setState({ data: array, sizeData: lengthArray, avg: avgArray })
    }
  }

  sumOfArray(array) {
    return array.reduce((sum, value) => {
      return sum + value
    }, 0)
  }

  render() {
    const inputStyle = {
      marginBottom: 10,
      position: 'relative',
      top: -6
    }

    const h3Style = {
      position: 'relative',
      top: -5
    }

    return (
      <Container>
        <h2>Bar Chart</h2>
        <h3 style={h3Style}>Avg: {this.state.avg}</h3>
        <input
          style={inputStyle}
          type="text"
          onKeyPress={this.handleKeyPress}
        />
        <BarChart
          data={this.state.data}
          sizeDataScale={100 / this.state.sizeData}
          size={[90, 90]}
          width="100"
          height="100"
          fill="#b5a6eb"
          stroke="#e6e6e6"
        />
      </Container>
    )
  }
}

export default BarChartContainer
