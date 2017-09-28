import React, { Component } from 'react'
import MultLineChart from './MultiLineChart'
import data from './MultiLineChartData.json'
import Container from './Container'

class MultiLineChartContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <h2>MultiLine Chart</h2>
        <h3>Avg:</h3>
        <MultLineChart
          data={data}
          arrName="Belgium"
          YItem1="Earnings"
          YItem2="Views"
          XItem="Date"
          id="multiLineChart1"
          marginTop={10}
          marginBottom={10}
          marginLeft={5}
          marginRight={5}
          width="190"
          height="120"
          strokeYItem1="#b5a6eb"
          strokeYItem2="#b5a6eb"
          fillYItem1="none"
          fillYItem2="none"
          strokeWidthYItem1="4"
          strokeWidthYItem2="2"
        />
      </Container>
    )
  }
}

export default MultiLineChartContainer
