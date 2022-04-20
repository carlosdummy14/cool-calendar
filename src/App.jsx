import DaysList from './components/DaysList'
import style from './App.module.css'
import { useEffect, useState } from 'react'
import { calculateDays } from './utils/calculateDays'

function App() {
  const [days, setDays] = useState([])

  useEffect(() => {
    setDays(calculateDays())
  }, [])

  console.log(days)
  return (
    <div className={style.app}>
      <DaysList days={days} />
    </div>
  )
}

export default App
