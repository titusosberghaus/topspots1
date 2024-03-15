import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const EventMarkers = () => {
  return (
    <>
      {/* Event 1: Kunst der Australien First People */}
      <Marker position={[50.9348194, 6.9507487]}>
        <Popup>
          Was: Kunst der Australien First People (Sonderausstellung im RJM)<br/>
          Wann: bis zum 7. April<br/>
          Wo: Cäcilienstraße 29-33, 50667 Köln
        </Popup>
      </Marker>

      {/* Event 2: The Mystery of Banksy – Streetart */}
      <Marker position={[50.9405274, 6.9094445]}>
        <Popup>
          Was: The Mystery of Banksy – Streetart<br/>
          Wann: bis zum 26. Mai<br/>
          Wo: Oskar-jäger-straße 99, 50825 Köln
        </Popup>
      </Marker>

      {/* Event 3: Learning to Listen */}
      <Marker position={[50.9438691, 6.9393513]}>
        <Popup>
          Was: Learning to Listen – gemeinsame listening sessions im “Kompakt Record Store”<br/>
          Wann: 28. März, 25. April, 29. Mai, 27. Juni<br/>
          Wo: Werderstraße 15-19, 50672 Köln
        </Popup>
      </Marker>

      {/* Event 4: Meet & Eat – Wochenmarkt */}
      <Marker position={[50.9363480, 6.9397542]}>
        <Popup>
          Was: Meet & Eat – Wochenmarkt (Food Event)<br/>
          Wann: immer Donnerstag: 16-21 Uhr<br/>
          Wo: Rudolfplatz, 50674 Köln
        </Popup>
      </Marker>

      {/* Event 5: Street Food Festival – Ehrenfeld */}
      <Marker position={[50.9497672, 6.9078312]}>
        <Popup>
          Was: Street Food Festival – Ehrenfeld<br/>
          Wann: 22. - 24. März<br/>
          Wo: Oskar-Jäger-Straße 192, 50825 Köln
        </Popup>
      </Marker>

      {/* Event 6: Roots Up - Tagesfestival */}
      <Marker position={[50.9548229, 6.9401571]}>
        <Popup>
          Was: Roots Up - Tagesfestival im Odonien. inklusive Live Musik, Drinks, Foods, Bazar<br/>
          Wann: 8.6.24<br/>
          Wo: Hornstraße 85, 50823 Köln
        </Popup>
      </Marker>

      {/* Event 7: Vino & Vintage in der Bredouille */}
      <Marker position={[50.9419268, 6.9365410]}>
        <Popup>
          Was: Vino & Vintage in der Bredouille – Trödelmarkt inklusive Wein<br/>
          Wann: Jeden ersten Sonntag im Monat<br/>
          Wo: Venloer Straße 22, 50672 Köln
        </Popup>
      </Marker>

      {/* Event 8: Kunst aus Lateinamerika */}
      <Marker position={[50.9324805, 6.9333729]}>
        <Popup>
          Was: Kunst aus Lateinamerika im Arte Popular Latino<br/>
          Wann: 8. März bis zum 29. Mai (jedoch nicht täglich!)<br/>
          Wo: Lindenstraße 84, 50674 Köln
        </Popup>
      </Marker>
    </>
  );
};

export default EventMarkers;
