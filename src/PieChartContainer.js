import React, { Component } from 'react'
import PieChart from './PieChart'
import styled from 'styled-components'
import Container from './Container'

class PieChartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [10, 20, 30, 40],
      range: ['#dddaed', '#cbc5e2', '#b5a6eb', '#cbc5e2']
    }
  }

  render() {
    return (
      <Container>
        <h2>Pie Chart</h2>
        <h3>Avg: </h3>
        <PieChart
          data={this.state.data}
          range={this.state.range}
          id="pie1"
          width="150"
          height="130"
        />
      </Container>
    )
  }
}

export default PieChartContainer
