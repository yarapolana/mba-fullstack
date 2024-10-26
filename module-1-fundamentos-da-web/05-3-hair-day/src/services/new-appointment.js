import { apiConfig } from './api.config.js'

export async function newAppointment({ id, name, scheduledAt }) {
  try {
    await fetch(`${apiConfig.baseUrl}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: String(id), name, scheduledAt }),
    })

    alert("Appointment scheduled successfully!")
  } catch (error) {
    console.error(error)
    alert("Failed to cancel appointment. Please, try again.")
  }
}
