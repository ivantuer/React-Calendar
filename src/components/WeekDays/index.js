import React from 'react'
import { weekDays } from '../../helpers/weekDays'

const WeekDays = () => {
  return (
    <div className="weekDayHolder">
      {weekDays.map(weekDay => (
        <div key={`${weekDay}_wd`} className="dayHolder">
          {weekDay.substr(0, 3)}
        </div>
      ))}
    </div>
  )
}

export default WeekDays
