import DayItem from './DayItem'
import style from './DaysList.module.css'

const DaysList = ({ days }) => {
  return (
    <div className={style.container}>
      {days.map(day => (
        <DayItem key={day.id} dayOfWeek={day.dayOfWeek} day={day.day} today={day.today} />
      ))}
    </div>
  )
}

export default DaysList
