import React, { Component } from 'react'
import ProgressArc from './ProgressArc'
import Container from './Container'

class ProgressArcContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 0.4 }

    this.handleChange = this.handleChange.bind(this)
  }

  // componentDidMount() {
  //   const percentage = Math.random()
  //   this.setState({ percentComplete: percentage })
  // }

  handleChange(event) {
    let value = event.target.value
    if (isNaN(value)) {
      this.setState({ value: 0 })
    } else {
      let p = parseInt(value)
      p = Math.round(p)
      if (p >= 0 && p <= 100) {
        p = p / 100
        this.setState({ value: p })
      } else {
        this.setState({ value: 0 })
      }
    }
  }

  render() {
    console.log(this.state.percentComplete)

    const aStyle = {
      cursor: 'pointer',
      width: 150
    }

    const inputStyle = {
      marginBottom: 15
    }

    return (
      <Container>
        <h2>Progress Arc</h2>
        <h3>{Math.round(this.state.value * 100)}%</h3>
        <input
          type="range"
          onChange={this.handleChange}
          style={inputStyle}
          step="1"
          value={this.state.value * 100}
          min="0"
          max="100"
        />

        <ProgressArc
          height={100}
          width={100}
          innerRadius={35}
          outerRadius={45}
          id={this.props.id}
          backgroundColor="#e6e6e6"
          foregroundColor="#b5a6eb"
          percentComplete={this.state.value}
          duration={2000}
        />
      </Container>
    )
  }
}

export default ProgressArcContainer
