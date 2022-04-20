export const calculateDays = () => {
  const day = new Date()
  const firstDay = new Date(`${day.getMonth() + 1}-1-${day.getFullYear()}`).getDay()
  const thisMonth = day.getMonth()
  const monthToShow = []
  const defaultRecord = { dayOfWeek: null, day: null, today: false }
  let numberOfDay = 1

  for (let i = 0; i < 42; i++) {
    if (i < firstDay) {
      monthToShow.push({ ...defaultRecord, id: i })
    } else {
      let validDay = new Date(`${day.getMonth() + 1}-${numberOfDay++}-${day.getFullYear()}`)
      const isToday = day.toDateString() === validDay.toDateString()
      console.log(validDay)
      if (validDay.getMonth() !== thisMonth) validDay = undefined
      monthToShow.push(
        isNaN(validDay)
          ? { ...defaultRecord, id: i }
          : { dayOfWeek: validDay.getDay(), day: validDay.getDate(), id: i, today: isToday }
      )
    }
  }

  return monthToShow
}
