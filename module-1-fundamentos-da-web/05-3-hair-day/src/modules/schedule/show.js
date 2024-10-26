import dayjs from 'dayjs'

const morningPeriod = document.getElementById('period-morning')
const afternoonPeriod = document.getElementById('period-afternoon')
const nightPeriod = document.getElementById('period-night')

export function showAppointments(dailyAppointments) {
  try {
    morningPeriod.innerHTML = ''
    afternoonPeriod.innerHTML = ''
    nightPeriod.innerHTML = ''

    dailyAppointments.forEach(appointment => {
      const item = document.createElement('li')
      const time = document.createElement('strong')
      const name = document.createElement('span')

      item.setAttribute("data-id", appointment.id)

      time.textContent = dayjs(appointment.scheduledAt).format('HH:mm')
      name.textContent = appointment.name

      const cancelIcon = document.createElement('img')
      cancelIcon.classList.add('cancel-icon')
      cancelIcon.setAttribute('src', './src/assets/cancel.svg')
      cancelIcon.setAttribute('alt', 'Cancel appointment icon')

      item.append(time, name, cancelIcon)

      const hour = dayjs(appointment.scheduledAt).hour()

      if (hour < 12) {
        morningPeriod.appendChild(item)
      } else if (hour < 18) {
        afternoonPeriod.appendChild(item)
      } else {
        nightPeriod.appendChild(item)
      }
    })
  } catch (error) {
    console.error(error)
    alert("Failed to load appointments. Please, try again.")
  }
}