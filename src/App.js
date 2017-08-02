import React, { Component } from 'react'
import ProgressArc from './ProgressArc'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { percentComplete: 0.3 }
    this.randomPercent = this.randomPercent.bind(this)
  }

  componentDidMount() {
    const percentage = Math.random()
    this.setState({ percentComplete: percentage })
  }

  randomPercent() {
    const percentage = Math.random()
    this.setState({ percentComplete: percentage })
  }

  render() {
    console.log(this.state.percentComplete)
    const style = {}
    return (
      <div>
        <a onClick={this.randomPercent}>Random percentage</a>
        <ProgressArc
          height={300}
          width={300}
          innerRadius={100}
          outerRadius={110}
          id="d3-arc"
          backgroundColor="#e6e6e6"
          foregroundColor="#00ff00"
          percentComplete={this.state.percentComplete}
          duration={2000}
        />
      </div>
    )
  }
}

export default App
