import dayjs from 'dayjs'
import { newAppointment } from '../../services/new-appointment.js'
import { scheduleDay } from '../schedule/load.js'

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')
const clientName = document.getElementById('client')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// Setting the current date to today
selectedDate.value = inputToday

// Setting the minimum date to today
selectedDate.min = inputToday

form.onsubmit = async event => {
  event.preventDefault()

  try {
    const name = clientName.value.trim()
    
    if (!name) {
      return alert('Name is required')
      // throw new Error('Name is required')
    }
    
    const hourSelected = document.querySelector('.hour-selected')
    
    if (!hourSelected) {
      return alert('Select an hour')
      // throw new Error('Select an hour')
    }
    
    const [hour] = hourSelected.innerHTML.split(':')

    const appointmentTime = dayjs(selectedDate.value).add(hour, 'hour')

    const id = new Date().getTime()

    await newAppointment({ id, name, scheduledAt: appointmentTime })

    await scheduleDay()

    clientName.value = ''

    // form.reset()
  } catch (error) {
    console.error(error)
    alert('Failed to schedule appointment. Please, try again.')
  }
}


// const name = document.querySelector('#name').value
// const date = document.querySelector('#date').value
// const time = document.querySelector('#time').value
// const service = document.querySelector('#service').value
// const client = { name, date, time, service }
// const clients = JSON.parse(localStorage.getItem('clients')) || []
// clients.push(client)
// localStorage.setItem('clients', JSON.stringify(clients))
// form.reset()