import React, { Component } from 'react'
import MyModalWindow from '../MyModalWindow'
class Day extends Component {
  state = {
    isModalOpen: false,
  }
  render() {
    const { day, index } = this.props
    const check = (day > 24 && index === 0) || (index > 3 && day < 7)
    const className = `dayHolder ${check ? 'dayFucker' : ''}`

    return (
      <div
        className={className}
        onClick={() => {
          if (check === false) this.setState({ isModalOpen: true })
        }}
      >
        {day}
        {this.state.isModalOpen && <MyModalWindow />}
      </div>
    )
  }
}

export default Day
