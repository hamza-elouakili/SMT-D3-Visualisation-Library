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

    var margin = {
        top: this.props.marginTop,
        right: this.props.marginRight,
        bottom: this.props.marginBottom,
        left: this.props.marginLeft
      },
      width = this.props.width - margin.left - margin.right,
      height = this.props.height - margin.top - margin.bottom

    // Define the scales
    // First define the xScale, or horizontal scale
    var xScale = d3
      .scaleLinear()
      .domain([0, data.length])
      .range([0, width])

    // Get the max value for the data. This will determine how high our y-scale is
    var maxValue = d3.max(data, function(d) {
      return d.value
    })

    // Now define the yScale, or vertical scale
    // The domain is inverted because the scale is determined from top down, rather than bottom up, and the data would look upside down otherwise.
    var yScale = d3
      .scaleLinear()
      .domain([maxValue, 0])
      .range([0, height])

    // Render the chart
    // Select the containing element and append an SVG with your defined width and height
    var chart = d3
      .select(this.refs.line)
      .append('svg')
      .attr('height', height + margin.top + margin.bottom)
      .attr('width', width + margin.left + margin.right)
      .attr('id', this.props.id)

    // Render the y-axis

    // Define some labels for the yAxis

    var yAxis = d3
      .axisLeft(yScale)
      // This is to make the horizontal tick lines stretch all the way across the chart
      .tickSizeInner(this.props.TicksY === 'full' ? -width : this.props.TicksY)
      .tickSizeOuter(this.props.TicksY === 'full' ? -width : this.props.TicksY)
      // This spaces the tick values slights from the axis
      .tickPadding(10)
      .ticks(3)

    if (this.props.showYAxis === 'yes') {
      chart
        .append('g')
        .attr('class', 'axis axis-y')
        .attr('stroke-dasharray', this.props.strokeDashY)
        .style('font-size', '8px')
        .attr(
          'transform',
          'translate(' + margin.left + ', ' + margin.right + ')'
        )
        .call(yAxis)
    }

    // Define some labels for the xAxis
    var xTicks = []
    for (var i = 0; i < data.length; i += 1) {
      xTicks.push(i + 0.5) // 0.5 is to ensure the ticks are offset correctly to match the data
    }
    // Render the x-axis
    var xAxis = d3
      .axisBottom(xScale)
      .tickSizeInner(this.props.TicksX === 'full' ? -height : this.props.TicksX)
      .tickSizeOuter(this.props.TicksX === 'full' ? -height : this.props.TicksX)
      .tickPadding(5)
      .tickValues(xTicks)
      .tickFormat(function(d, i) {
        return i % 2 == 0 ? data[i].label : ''
      })

    if (this.props.showXAxis === 'yes') {
      chart
        .append('g')
        .attr('transform', 'translate(' + margin.left + ', ' + height + ')')
        .attr('class', 'axis axis-y')
        .call(xAxis)
        .attr('stroke-dasharray', this.props.strokeDashX)
        .style('font-size', '8px')
    }

    // Render the line
    // This is rendered last so it appears on top of the axis and not vice versa

    var line = d3
      .line()
      .curve(d3.curveCardinal) //To curve the line chart
      .x(function(d, i) {
        return width / data.length * (i + 0.5)
      })
      .y(function(d, i) {
        return yScale(d.value)
      })

    chart
      .append('g')
      .attr('fill', 'none')
      .attr('class', 'line-graph')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .selectAll('.path-line')
      .data([null])
      .enter()
      .append('path')
      .attr('class', 'path-line')
      .attr('d', function() {
        return line(data)
      })
      .style('stroke-width', this.props.strokeWidth)
      .style('stroke', this.props.stroke)
  }
  render() {
    return <div ref="line" />
  }
}

export default LineChart
