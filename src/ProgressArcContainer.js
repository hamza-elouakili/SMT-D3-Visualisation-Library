import React, { Component } from 'react'
import ProgressArc from './ProgressArc'

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
      let p = parseFloat(value)
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
    const aStyle = {
      cursor: 'pointer',
      width: 150
    }

    const inputStyle = {
      marginBottom: 15
    }

    return (
      <div style={divStyle}>
        <h2>Progress Arc</h2>
        <h3>
          {this.state.value * 100}%
        </h3>
        <input
          type="range"
          onChange={this.handleChange}
          style={inputStyle}
          min="0"
          max="100"
          step="1"
        />

        <ProgressArc
          height={100}
          width={100}
          innerRadius={35}
          outerRadius={45}
          id={this.props.id}
          backgroundColor="#e6e6e6"
          foregroundColor="#00ff00"
          percentComplete={this.state.value}
          duration={2000}
        />
      </div>
    )
  }
}

export default ProgressArcContainer
