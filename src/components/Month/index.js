import React, { Component } from 'react'
import yearArray from '../../helpers/getYearArray'
import Monthc from '../nMonth'

import './Month.css'
class Year extends Component {
  state = {
    weeks: yearArray(2018),
    position: -new Date().getMonth() * 1084.5,
  }
  changePosition = event => {
    if (event.target.innerText === 'Prev') {
      this.setState({ position: this.state.position + 1084.5 })
    } else if (event.target.innerText === 'Next')
      this.setState({ position: this.state.position - 1084.5 })

    console.log('i was clicked')
  }
  render() {
    return (
      <div className="wrapper">
        <div className="yearHolder" style={{ left: this.state.position }}>
          {this.state.weeks['2018'].map((element, index) => (
            <Monthc
              handleClick={this.changePosition}
              key={`${element}_month`}
              month={element}
              monthNumber={index}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Year
