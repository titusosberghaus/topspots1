import React, { useState } from 'react';

function EventForm() {
  const [event, setEvent] = useState({
    ort: '',
    uhrzeit: '',
    kosten: '',
    details: '',
    genehmigt: false, // Initialwert auf false setzen
  });
  const [events, setEvents] = useState([]); // Zustand für das Speichern aller Events

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Verhindert die Standard-Formularabsendung
    setEvents([...events, event]); // Fügt das aktuelle Event zum Array hinzu
    // Setzt das Event-Objekt nach dem Absenden zurück
    setEvent({ ort: '', uhrzeit: '', kosten: '', details: '', genehmigt: false });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ort">Ort:</label>
          <input
            id="ort"
            name="ort"
            type="text"
            value={event.ort}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="uhrzeit">Uhrzeit:</label>
          <input
            id="uhrzeit"
            name="uhrzeit"
            type="text"
            value={event.uhrzeit}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="kosten">Kosten:</label>
          <input
            id="kosten"
            name="kosten"
            type="text"
            value={event.kosten}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="details">Details:</label>
          <textarea
            id="details"
            name="details"
            value={event.details}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Event einreichen</button>
      </form>
      
      {/* Optionale Anzeige der eingereichten Events */}
      <div className="EingereichteEvents">
        <h3>Eingereichte Events:</h3>
        {events.map((event, index) => (
          <div key={index}>
            <p>Ort: {event.ort}</p>
            <p>Uhrzeit: {event.uhrzeit}</p>
            <p>Kosten: {event.kosten}</p>
            <p>Details: {event.details}</p>
            <p>Genehmigt: {event.genehmigt ? "Ja" : "Nein"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventForm;
