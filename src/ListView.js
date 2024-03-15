import React from 'react';

const ListView = () => {
  // Beispiel für Event-Daten
  const events = [
    { id: 1, name: 'Event 1', description: 'Beschreibung 1' },
    { id: 2, name: 'Event 2', description: 'Beschreibung 2' },
    // Fügen Sie hier mehr Events hinzu
  ];

  return (
    <div>
      <h2>Eventliste</h2>
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ListView;
