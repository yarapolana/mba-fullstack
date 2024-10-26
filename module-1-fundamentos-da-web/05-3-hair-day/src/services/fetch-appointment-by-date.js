import dayjs from 'dayjs'
import { apiConfig } from './api.config.js'

export async function fetchAppointmentByDate(date) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/appointments`)

    const appointments = await response.json()

    const dailyAppointments = appointments.filter(appointment => 
      dayjs(date).isSame(appointment.scheduledAt, 'day')
    )

    return dailyAppointments
  } catch (error) {
    console.error(error)
    alert("Failed to cancel appointment. Please, try again.")
  }
}
