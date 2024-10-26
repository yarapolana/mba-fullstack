import dayjs from 'dayjs'
import { openingHours } from '../../utils/opening-hours.js'
import { hoursClick } from './hours-click.js'

const hours = document.getElementById('hours')

export function hoursLoad({ date, dailyAppointments }) {
  hours.innerHTML = ''

  const unavailableHours = dailyAppointments.map(appointment =>
    dayjs(appointment.scheduledAt).format('HH:mm')
  )

  const opening = openingHours.map(hour => {
    const [scheduleHour] = hour.split(':')

    const hasHourPassed = dayjs(date).add(scheduleHour, 'hour').isBefore(dayjs())

    const isAvailable = !unavailableHours.includes(hour) && !hasHourPassed

    return { hour, isAvailable }
  })

  opening.forEach(({ hour, isAvailable }) => {
    const li = document.createElement('li')
    
    li.classList.add('hour')
    li.classList.add(isAvailable ? 'hour-available' : 'hour-unavailable')

    li.textContent = hour

    if (hour === '09:00') {
      hourHeaderAdd('Manhã')
    } else if (hour === '13:00') {
      hourHeaderAdd('Tarde')
    } else if (hour === '18:00') {
      hourHeaderAdd('Noite')
    }

    hours.append(li)
    // const hourElement = document.createElement('button')
    // hourElement.classList.add('hour-available')
    // hourElement.textContent = hour
    // hourElement.disabled = !isAvailable

    // hours.appendChild(hourElement)
  })

  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement('li')

  header.classList.add('hour-period')
  header.textContent = title

  hours.append(header)
}