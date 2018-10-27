import React, { Component } from 'react'
import MonthNames from '../../helpers/monthNames'

const ButtonsAndMonth = ({ monthNumber, handleClick }) => {
  return (
    <div className="MonthAndButtons">
      <button onClick={monthNumber > 0 && handleClick}>Prev</button>
      <h2>{MonthNames[monthNumber]}</h2>
      <button onClick={monthNumber < 11 && handleClick}>Next</button>
    </div>
  )
}

export default ButtonsAndMonth
