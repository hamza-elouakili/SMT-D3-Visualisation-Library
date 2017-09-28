import React from 'react'
import ProgressArcContainer from './ProgressArcContainer'
import BarChartContainer from './BarChartContainer'
import LineChartContainer from './LineChartContainer'
import PieChartContainer from './PieChartContainer'
import MultiLineChartContainer from './MultiLineChartContainer'
import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100vh;
  // border: 1px solid green;
`
const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  // border: 1px solid blue;
  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`

class App extends React.Component {
  render() {
    return (
      <PageWrapper>
        <ItemWrapper>
          <ProgressArcContainer id="d3-arc1" />
          <BarChartContainer />
          <LineChartContainer />
          <PieChartContainer />
          <MultiLineChartContainer />
        </ItemWrapper>
      </PageWrapper>
    )
  }
}

export default App

// <div style={layout}>
//         <ProgressArcContainer id="d3-arc1" />
//         <ProgressArcContainer id="d3-arc2" />
//       </div>
