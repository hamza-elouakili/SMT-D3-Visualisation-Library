import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import * as d3 from 'd3'
import data from './MultiLineChartData.json'
// var data = require('./data.json'); //with path

class MultiLineChart extends Component {
  constructor(props) {
    super(props)

    this.draw = this.draw.bind(this)
  }

  componentDidMount() {
    this.draw(data, 'Belgium')
  }

  componentDidUpdate() {
    const context = d3.select(`#${this.props.id}`)
    context.remove()
    this.draw(data, 'Belgium')
  }

  draw(data, country) {
    // set the dimensions and margins of the graph
    // var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    //   width = 220 - margin.left - margin.right,
    // 	height = 120 - margin.top - margin.bottom

    var margin = { top: 10, right: 5, bottom: 10, left: 5 },
      width = 190 - margin.left - margin.right,
      height = 120 - margin.top - margin.bottom

    // parse the date / time
    var parseTime = d3.timeParse('%Y')

    // set the ranges
    var x = d3.scaleTime().range([0, width])
    var y = d3.scaleLinear().range([height, 0])

    // define the line
    var valueline = d3
      .line()
      .x(function(d) {
        return x(d.Date)
      })
      .y(function(d) {
        return y(d.Imports)
      })
    // define the line
    var valueline2 = d3
      .line()
      .x(function(d) {
        return x(d.Date)
      })
      .y(function(d) {
        return y(d.Exports)
      })

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3
      .select(this.refs.multiline)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    var data = data[country]

    // format the data
    data.forEach(function(d) {
      d.Date = parseTime(d.Date)
      d.Imports = +d.Imports
      d.Exports = +d.Exports
    })

    // sort years ascending
    data.sort(function(a, b) {
      return a['Date'] - b['Date']
    })

    // Scale the range of the data
    x.domain(
      d3.extent(data, function(d) {
        return d.Date
      })
    )
    y.domain([
      0,
      d3.max(data, function(d) {
        return Math.max(d.Imports, d.Exports)
      })
    ])

    // Add the valueline path.
    svg
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', valueline)
      .style('stroke', '#b5a6eb')
      .attr('fill', 'none')

    // Add the valueline path.
    svg
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', valueline2)
      .style('stroke', '#b5a6eb')
      .attr('fill', 'none')

    // // Add the X Axis
    // svg
    //   .append('g')
    //   .attr('transform', 'translate(0,' + height + ')')
    //   .call(d3.axisBottom(x))

    // // Add the Y Axis
    // svg.append('g').call(d3.axisLeft(y))
  }

  render() {
    return <div ref="multiline" />
  }
}

export default MultiLineChart
