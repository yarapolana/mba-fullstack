import { apiConfig } from './api.config.js'

export async function cancelAppointment(id) {
  try {
    await fetch(`${apiConfig.baseUrl}/appointments/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error(error)
    alert("Failed to cancel appointment. Please, try again.")
  }
}
