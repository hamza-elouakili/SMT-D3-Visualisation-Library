import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import * as d3 from 'd3'
// var data = require('./data.json'); //with path

class MultiLineChart extends Component {
  constructor(props) {
    super(props)

    this.draw = this.draw.bind(this)
  }

  componentDidMount() {
    this.draw(this.props.data, this.props.arrName)
  }

  componentDidUpdate() {
    const context = d3.select(`#${this.props.id}`)
    context.remove()
    this.draw(this.props.data, this.props.arrName)
  }

  draw(data, country) {
    // set the dimensions and margins of the graph
    // var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    //   width = 220 - margin.left - margin.right,
    // 	height = 120 - margin.top - margin.bottom

    var YItem1 = this.props.YItem1
    var YItem2 = this.props.YItem2
    var XItem = this.props.XItem

    var margin = {
        top: this.props.marginTop,
        right: this.props.marginRight,
        bottom: this.props.marginBottom,
        left: this.props.marginLeft
      },
      width = this.props.width - margin.left - margin.right,
      height = this.props.height - margin.top - margin.bottom

    // parse the date / time
    var parseTime = d3.timeParse('%Y')

    // set the ranges
    var x = d3.scaleTime().range([0, width])
    var y = d3.scaleLinear().range([height, 0])

    // define the line
    var valueline = d3
      .line()
      .curve(d3.curveCardinal) //To curve the line chart
      .x(function(d) {
        return x(d[XItem])
      })
      .y(function(d) {
        return y(d[YItem1])
      })

    // // define the area in order to fill the area of the line below
    // var area = d3
    //   .area()
    //   .x(function(d) {
    //     return x(d[XItem])
    //   })
    //   .y0(height)
    //   .y1(function(d) {
    //     return y(d[YItem1])
    //   })

    // define the line
    var valueline2 = d3
      .line()
      .curve(d3.curveCardinal) //To curve the line chart
      .x(function(d) {
        return x(d[XItem])
      })
      .y(function(d) {
        return y(d[YItem2])
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
      d.Date = parseTime(d[XItem])
      d[YItem2] = +d[YItem2]
      d[YItem1] = +d[YItem1]
    })

    // sort years ascending
    data.sort(function(a, b) {
      return a['Date'] - b['Date']
    })

    // Scale the range of the data
    x.domain(
      d3.extent(data, function(d) {
        return d[XItem]
      })
    )
    y.domain([
      0,
      d3.max(data, function(d) {
        return Math.max(d[YItem1], d[YItem2])
      })
    ])

    // Add the valueline path.
    svg
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', valueline)
      .style('stroke', this.props.strokeYItem1)
      .attr('fill', this.props.fillYItem1)
      .style('stroke-width', this.props.strokeWidthYItem1)

    // Add the valueline path.
    svg
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', valueline2)
      .style('stroke', this.props.strokeYItem2)
      .attr('fill', this.props.fillYItem1)
      .style('stroke-width', this.props.strokeWidthYItem2)

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
