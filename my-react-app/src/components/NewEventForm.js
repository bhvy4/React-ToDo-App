import React, { useState } from 'react'
import './NewEventForm.css'
export default function NewEventForm({addEvent}) {

    const [eventTitle, setEventTitle] = useState('')
    const [date, setDate] = useState('')
    const resetForm = () => {
        setEventTitle('')
        setDate('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const event = {
            title: eventTitle,
            date: date,
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
            <button>submit</button>
        </form>
    )
}
