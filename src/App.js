import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import React from "react";
import Modal from "./components/Modal";
import { useState } from "react";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [events, setEvents] = useState([]);

  const [showEvents, setShowEvents] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const addEvent = (event)=>{
    setEvents((prevEvents)=>{
      return ([...prevEvents , event])
    })
    setShowModal(false)
  }


  return (
    <div className="App">
      <Title title="This is title prop" subtitle="this is a subtitle prop" />
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show</button>
        </div>
      )}
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide</button>
        </div>
      )}
      {showEvents && <EventList events = {events} handleClick = {handleClick}/>}
      {showModal && (
        <Modal isSalesModal = {true}>
        <NewEventForm addEvent = {addEvent}/>
        </Modal>
      )}
      <br />
      <button onClick={() => setShowModal(true)}>Click to show Modal</button>
    </div>
  );
}

export default App;
