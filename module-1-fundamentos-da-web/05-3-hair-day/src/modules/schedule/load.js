import { hoursLoad } from '../form/hours-load.js'
import { fetchAppointmentByDate } from '../../services/fetch-appointment-by-date.js'
import { showAppointments } from './show.js'

const selectedDate = document.getElementById('date')

export async function scheduleDay() {
  const date = selectedDate.value

  const dailyAppointments = await fetchAppointmentByDate(date)

  showAppointments(dailyAppointments)

  hoursLoad({ date, dailyAppointments })
}
