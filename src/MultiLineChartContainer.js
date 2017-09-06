import React, { Component } from 'react'
import MultLineChart from './MultiLineChart'

class MultiLineChartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [10, 20, 30],
      range: ['#097054', '#FFDE00', '#fe9922']
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

    return (
      <div style={divStyle}>
        <h2>MultiLine Chart</h2>

        <MultLineChart
          data={this.state.data}
          range={this.state.range}
          id="multiLineChart1"
        />
      </div>
    )
  }
}

export default MultiLineChartContainer
