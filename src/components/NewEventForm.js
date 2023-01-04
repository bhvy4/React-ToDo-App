import React, { useState } from 'react'
import './NewEventForm.css'
export default function NewEventForm({ addEvent }) {

    const [eventTitle, setEventTitle] = useState('')
    const [date, setDate] = useState('')
    const [location , setLocation] = useState('manchester')


    const resetForm = () => {
        setEventTitle('')
        setDate('')
        setLocation('manchester')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const event = {
            title: eventTitle,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        addEvent(event)
        resetForm()
    }
    return (
        <form className='new-event-form' onSubmit={handleSubmit} >
            <label>
                <span>
                    Event name:
                </span>
                <input
                    type="text"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                />
            </label>
            <label>
                <span>
                    Date:
                </span>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>
            <label>
                <span>
                    Event Location:
                </span>
                <select onChange={(e)=> setLocation(e.target.value)}>
                    <option value="manchester">Manchester</option>
                    <option value="london">London</option>
                    <option value="cardiff">Cardiff</option>
                </select>
            </label>
            <button>submit</button>
        </form>
    )
}
