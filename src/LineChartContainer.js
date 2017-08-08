import React, { Component } from 'react'
import LineChart from './LineChart'

class LineChartContainer extends Component {
  constructor(props) {
    super(props)
    this.calculateAvg = this.calculateAvg.bind(this)
    this.state = {
      data: [
        { value: 10, label: 'Mon' },
        { value: 50, label: 'Tues' },
        { value: 70, label: 'Wed' },
        { value: 100, label: 'Thur' },
        { value: 50, label: 'Fri' },
        { value: 23, label: 'Sat' },
        { value: 100, label: 'Sun' },
        { value: 99, label: 'Mon' },
        { value: 63, label: 'Tues' },
        { value: 41, label: 'Wed' },
        { value: 100, label: 'Thur' },
        { value: 50, label: 'Fri' },
        { value: 23, label: 'Sat' },
        { value: 100, label: 'Sun' }
      ],
      avg: ''
    }
  }

  componentDidMount() {
    let arr = this.state.data
    let sum = arr.reduce((sum, data) => {
      return sum + data.value
    }, 0)
    let avg = sum / arr.length
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
    const divStyle = {
      border: '1px solid black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: 300,
      height: 300,
      marginRight: 10
    }

    return (
      <div style={divStyle}>
        <h2>Line Chart</h2>
        <h3>
          Avg: {this.state.avg}
        </h3>
        <button onClick={this.calculateAvg}>Calculate Average</button>

        <LineChart data={this.state.data} id="linechart-1" />
      </div>
    )
  }
}

export default LineChartContainer
