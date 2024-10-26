import { scheduleDay } from '../schedule/load.js'

const selectedDate = document.getElementById('date')

selectedDate.onchange = () => scheduleDay()
