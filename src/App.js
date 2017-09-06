import React from 'react'
import ProgressArcContainer from './ProgressArcContainer'
import BarChartContainer from './BarChartContainer'
import LineChartContainer from './LineChartContainer'
import PieChartContainer from './PieChartContainer'
import MultiLineChartContainer from './MultiLineChartContainer'

class App extends React.Component {
  render() {
    const layout = {
      display: 'flex',
      flexWrap: 'wrap',
      margin: 10
    }
    return (
      <div style={layout}>
        <ProgressArcContainer id="d3-arc1" />
        <BarChartContainer />
        <LineChartContainer />
        <PieChartContainer />
        <MultiLineChartContainer />
      </div>
    )
  }
}

export default App

// <div style={layout}>
//         <ProgressArcContainer id="d3-arc1" />
//         <ProgressArcContainer id="d3-arc2" />
//       </div>
