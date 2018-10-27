import Calendar from 'calendar-month-array'

const getWeeksForMonth = (from, to = from) => {
  const yearArray = {}
  for (let j = from; j <= to; j++) {
    const monthArray = []
    for (let i = 0; i < 12; i++) {
      monthArray.push(Calendar(new Date(j, i)))
    }
    yearArray[j] = monthArray
  }
  return yearArray
}

export default getWeeksForMonth
