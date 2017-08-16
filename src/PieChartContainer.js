import React, { Component } from 'react'
import PieChart from './PieChart'

class PieChartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [10, 20, 100],
      range: ['#fe8882', '#fe3232', '#fe9922']
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
      width: 300,
      height: 300,
      marginRight: 10
    }

    return (
      <div style={divStyle}>
        <h2>Pie Chart</h2>

        <PieChart data={this.state.data} range={this.state.range} id="pie1" />
      </div>
    )
  }
}

export default PieChartContainer
