import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import * as d3 from 'd3'
class LineChart extends Component {
  constructor(props) {
    super(props)

    this.draw = this.draw.bind(this)
  }

  componentDidMount() {
    this.draw()
  }

  componentDidUpdate() {
    const context = d3.select(`#${this.props.id}`)
    context.remove()
    this.draw()
  }

  draw() {
    // Define some sample data
    var data = this.props.data

    // Define the dimensions
    var dimensions = {
      gWidth: 220,
      gHeight: 120,
      gMargin: 30,
      gInnerWidth: 175,
      gInnerHeight: 100,
      bMargin: 1
    }

    // Define the dimensions
    // var dimensions = {
    //   gWidth: 220,
    //   gHeight: 150,
    //   gMargin: 30,
    //   gInnerWidth: 175,
    //   gInnerHeight: 100,
    //   bMargin: 1
    // }

    // Define the scales
    // First define the xScale, or horizontal scale
    var xScale = d3
      .scaleLinear()
      .domain([0, data.length])
      .range([0, dimensions.gInnerWidth])

    // Get the max value for the data. This will determine how high our y-scale is
    var maxValue = d3.max(data, function(d) {
      return d.value
    })

    // Now define the yScale, or vertical scale
    // The domain is inverted because the scale is determined from top down, rather than bottom up, and the data would look upside down otherwise.
    var yScale = d3
      .scaleLinear()
      .domain([maxValue, 0])
      .range([0, dimensions.gInnerHeight])

    // Render the chart
    // Select the containing element and append an SVG with your defined width and height
    var chart = d3
      .select(this.refs.line)
      .append('svg')
      .attr('height', dimensions.gHeight)
      .attr('width', dimensions.gWidth)
      .attr('id', this.props.id)

    // Render the y-axis
    var yAxis = d3
      .axisLeft(yScale)
      // This is to make the horizontal tick lines stretch all the way across the chart
      .tickSizeInner(-dimensions.gInnerWidth)
      // This spaces the tick values slights from the axis
      .tickPadding(10)

    // chart
    //   .append('g')
    //   .attr('class', 'axis axis-y')
    //   .attr(
    //     'transform',
    //     'translate(' + dimensions.gMargin + ', ' + dimensions.gMargin + ')'
    //   )
    //   .call(yAxis)

    // Define some labels for the xAxis
    var xTicks = []
    for (var i = 0; i < data.length; i++) {
      xTicks.push(i + 0.5) // 0.5 is to ensure the ticks are offset correctly to match the data
    }
    // Render the x-axis
    var xAxis = d3
      .axisBottom(xScale)
      .tickValues(xTicks)
      .tickFormat(function(d, i) {
        return data[i].label
      })

    // chart
    //   .append('g')
    //   .attr(
    //     'transform',
    //     'translate(' +
    //       dimensions.gMargin +
    //       ', ' +
    //       (dimensions.gMargin + dimensions.gInnerHeight) +
    //       ')'
    //   )
    //   .attr('class', 'axis axis-y')
    //   .call(xAxis)

    // Render the line
    // This is rendered last so it appears on top of the axis and not vice versa
    var line = d3
      .line()
      .curve(d3.curveCardinal) //To curve the line chart
      .x(function(d, i) {
        return dimensions.gInnerWidth / data.length * (i + 0.5)
      })
      .y(function(d, i) {
        return yScale(d.value)
      })

    chart
      .append('g')
      .attr('fill', 'none')
      .attr('class', 'line-graph')
      .attr(
        'transform',
        'translate(' + dimensions.gMargin + ',' + dimensions.gMargin + ')'
      )
      .selectAll('.path-line')
      .data([null])
      .enter()
      .append('path')
      .attr('class', 'path-line')
      .attr('d', function() {
        return line(data)
      })
      .style('stroke-width', 1)
      .style('stroke', '#b5a6eb')
  }
  render() {
    return <div ref="line" />
  }
}

export default LineChart
