import React from "react";
import styles from "./EventList.module.css";
function EventList({ events, handleClick }) {
  return events.map((event, index) => (
    <div className={styles.card} key={event.id}>
      <h2>
        {index}-{event.title}
      </h2>
      <p>{event.date} - {event.location}</p>
      <button onClick={() => handleClick(event.id)}>click to delete</button>
    </div>
  ));
}

export default EventList;