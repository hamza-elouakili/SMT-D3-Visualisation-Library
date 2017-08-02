import React from 'react'
import ProgressArcContainer from './ProgressArcContainer'

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
      </div>
    )
  }
}

export default App

// <div style={layout}>
//         <ProgressArcContainer id="d3-arc1" />
//         <ProgressArcContainer id="d3-arc2" />
//       </div>
