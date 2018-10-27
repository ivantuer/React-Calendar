import React, { Component } from 'react'
import Day from '../Day'

class Week extends Component {
  state = {}
  render() {
    const { week, index } = this.props
    return (
      <div className="weekHolder">
        {week.map(el => (
          <Day
            key={`${el}_day`}
            day={el.toString().split(' ')[2]}
            index={index}
          />
        ))}
      </div>
    )
  }
}

export default Week
