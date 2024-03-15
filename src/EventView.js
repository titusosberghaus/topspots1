const EventView = () => {
 return (

    <div className="EventView">
        <h1>Alle Events</h1>
        <div className="event">
  <img src={`${process.env.PUBLIC_URL}/event1.jpg`} alt="Bildbeschreibung" className="eventbild" />
  <div className="details-container">
    <div className="detail">Was: Kunst der Australien First People</div>
    <div className="detail">Wann: bis zum 7. April</div>
    <div className="detail">Wo: Cäcilienstraße 29-33, 50667 Köln</div>
  </div>
</div>

{/* Event 2: The Mystery of Banksy – Streetart */}
<div className="event">
  <img src={`${process.env.PUBLIC_URL}/event2.jpg`} alt="The Mystery of Banksy" className="eventbild" />
  <div className="details-container">
  <div className="detail">Was: The Mystery of Banksy – Streetart</div>
  <div className="detail">Wann: bis zum 26. Mai</div>
  <div className="detail">Wo: Oskar-Jäger-Straße 99, 50825 Köln</div>
</div>
</div>


{/* Event 3: Learning to Listen */}
<div className="event">
  <img src={`${process.env.PUBLIC_URL}/event3.jpg`} alt="Learning to Listen" className="eventbild" />
  <div className="details-container">
  <div className="detail">Was: Learning to Listen – gemeinsame listening sessions im “Kompakt Record Store”</div>
  <div className="detail">Wann: 28. März, 25. April, 29. Mai, 27. Juni</div>
  <div className="detail">Wo: Werderstraße 15-19, 50672 Köln</div>
</div>
</div>


{/* Event 4: Meet & Eat – Wochenmarkt */}
<div className="event">
  <img src={`${process.env.PUBLIC_URL}/event4.jpg`} alt="Meet & Eat" className="eventbild" />
  <div className="details-container">
  <div className="detail">Was: Meet & Eat – Wochenmarkt (Food Event)</div>
  <div className="detail">Wann: immer Donnerstag: 16-21 Uhr</div>
  <div className="detail">Wo: Rudolfplatz, 50674 Köln</div>
</div>
</div>


{/* Event 5: Street Food Festival – Ehrenfeld */}
<div className="event">
  <img src={`${process.env.PUBLIC_URL}/event5.jpg`} alt="Street Food Festival" className="eventbild" />
  <div className="details-container">
  <div className="detail">Was: Street Food Festival – Ehrenfeld</div>
  <div className="detail">Wann: 22. - 24. März</div>
  <div className="detail">Wo: Oskar-Jäger-Straße 192, 50825 Köln</div>
</div>
</div>


{/* Event 6: Roots Up - Tagesfestival */}
<div className="event">
  <img src={`${process.env.PUBLIC_URL}/event6.jpg`} alt="Roots Up" className="eventbild" />
  <div className="details-container">
  <div className="detail">Was: Roots Up - Tagesfestival im Odonien. inklusive Live Musik, Drinks, Foods, Bazar</div>
  <div className="detail">Wann: 8.6.24</div>
  <div className="detail">Wo: Hornstraße 85, 50823 Köln</div>
</div>
</div>


{/* Event 7: Vino & Vintage in der Bredouille */}
<div className="event">
  <img src={`${process.env.PUBLIC_URL}/event7.jpg`} alt="Vino & Vintage" className="eventbild" />
  <div className="details-container">
  <div className="detail">Was: Vino & Vintage in der Bredouille – Trödelmarkt inklusive Wein</div>
  <div className="detail">Wann: Jeden ersten Sonntag im Monat</div>
  <div className="detail">Wo: Venloer Straße 22, 50672 Köln</div>
</div>
</div>


{/* Event 8: Kunst aus Lateinamerika im Arte Popular Latino */}
<div className="event">
  <img src={`${process.env.PUBLIC_URL}/event8.jpg`} alt="Kunst aus Lateinamerika" className="eventbild" />
  <div className="details-container">
  <div className="detail">Was: Kunst aus Lateinamerika im Arte Popular Latino</div>
  <div className="detail">Wann: 8. März bis zum 29. Mai (jedoch nicht täglich!)</div>
  <div className="detail">Wo: Lindenstraße 84, 50674 Köln</div>
</div>
</div>
















    </div>
 );













};

export default EventView;