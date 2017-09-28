import React from 'react'
import * as d3 from 'd3'

class PieChart extends React.Component {
  constructor(props) {
    super(props)
    this.draw = this.draw.bind(this)
  }

  componentDidUpdate() {
    const context = d3.select(`#${this.props.id}`)
    context.remove()
    this.draw()
  }

  componentDidMount() {
    this.draw()
  }

  draw() {
    var data = this.props.data

    var width = this.props.width,
      height = this.props.height,
      radius = Math.min(width, height) / 2

    var color = d3.scaleOrdinal().range(this.props.range)

    var arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(0)

    // var labelArc = d3.arc().outerRadius(radius - 40).innerRadius(radius - 40)

    var pie = d3
      .pie()
      .sort(null)
      .value(function(d) {
        return d
      })

    var svg = d3
      .select(this.refs.pie)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
      .attr('id', this.props.id)

    var g = svg
      .selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc')

    g
      .append('path')
      .attr('d', arc)
      .style('fill', function(d) {
        return color(d.data)
      })

    // g
    //   .append('text')
    //   .attr('transform', function(d) {
    //     return 'translate(' + labelArc.centroid(d) + ')'
    //   })
    //   .attr('dy', '.05em')
    //   .text(function(d) {
    //     return d.data
    //   })
    //   .attr('font-size', '10px')
    //   .attr('text-anchor', 'middle')
  }

  render() {
    return <div ref="pie" />
  }
}

export default PieChart
