import style from './DayItem.module.css'

const DAYS = {
  0: 'SUNDAY',
  1: 'MONDAY',
  2: 'TUESDAY',
  3: 'WENSDAY',
  4: 'THURSDAY',
  5: 'FRIDAY',
  6: 'SATURDAY',
}

const DayItem = ({ dayOfWeek, day, today }) => {
  return (
    <div className={style.container}>
      <div className={style.front}>
        <h3 className={style.title}>
          <span>{day}</span>
          <span>{today && '🌟'}</span>
        </h3>
        <span className={style.text}>{DAYS[dayOfWeek]}</span>
      </div>
      <div className={style.back}></div>
    </div>
  )
}

export default DayItem
