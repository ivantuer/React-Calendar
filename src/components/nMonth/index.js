import React, { Component } from 'react'
import Week from '../nweek'
import WeekDays from '../WeekDays'
import ButtonsAndMonth from '../ButtonsAndMonth'
class Month extends Component {
  state = {}
  render() {
    const { month, monthNumber, handleClick } = this.props
    return (
      <div className="monthHolder">
        <ButtonsAndMonth monthNumber={monthNumber} handleClick={handleClick} />
        <WeekDays />
        {month.map((elem, index) => (
          <Week key={`${elem}_week`} week={elem} index={index} />
        ))}
      </div>
    )
  }
}

export default Month
