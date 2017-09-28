import React, { Component } from 'react'
import LineChart from './LineChart'
import Container from './Container'

class LineChartContainer extends Component {
  constructor(props) {
    super(props)
    this.calculateAvg = this.calculateAvg.bind(this)
    this.state = {
      data: [
        { value: 10, label: 'Mon' },
        { value: 20, label: 'Tue' },
        { value: 30, label: 'Wed' },
        { value: 40, label: 'Thu' },
        { value: 20, label: 'Fri' },
        { value: 50, label: 'Sat' },
        { value: 90, label: 'Sun' },
        { value: 70, label: 'Mon' },
        { value: 70, label: 'Tue' },
        { value: 90, label: 'Wed' },
        { value: 100, label: 'Thu' },
        { value: 140, label: 'Fri' },
        { value: 120, label: 'Sat' },
        { value: 190, label: 'Sun' }
      ],
      avg: ''
    }
  }

  componentDidMount() {
    let arr = this.state.data
    let sum = arr.reduce((sum, data) => {
      return sum + data.value
    }, 0)
    let avg = (sum / arr.length).toFixed(2)
    this.setState({ avg: avg })
  }

  calculateAvg() {
    let arr = this.state.data
    let sum = arr.reduce((sum, data) => {
      return sum + data.value
    }, 0)
    let avg = sum / arr.length
    this.setState({ avg: avg })
  }

  render() {
    return (
      <Container>
        <h2>Line Chart</h2>

        <LineChart
          data={this.state.data}
          id="linechart-1"
          marginTop={0}
          marginBottom={20}
          marginLeft={30}
          marginRight={0}
          width="200"
          height="160"
          stroke="#b5a6eb"
          strokeWidth="2"
        />
      </Container>
    )
  }
}

export default LineChartContainer
