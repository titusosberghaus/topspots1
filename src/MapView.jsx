import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventView from './EventView';
import Featured1 from './Featured1';
import Featured2 from './Featured2';
import Featured3 from './Featured3';
import { Link } from 'react-router-dom'; // Importiere Link
import EventMarkers from './EventMarkers';

const MapView = () => {
  const position = [50.9375, 6.9603]; // Köln Location

  return (
    <div>
      <MapContainer center={position} zoom={14} style={{ height: '500px', width: '100%' }} key={position.toString()}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Hier können Sie Ihre Event-Marker hinzufügen */}
      <EventMarkers></EventMarkers>
      </MapContainer>
      <br></br>
      <br></br>
      <h2>Cologne für junge Kölner</h2>
      <p className="slogan">Entdecke Köln neu – Dein Tor zu den angesagtesten Kulturevents der Stadt! Tauch ein in Musik, Kunst und das pulsierende Nachtleben, die begeistern und verbinden. Junge Leute, frische Vibes: Bei uns findest du, was in Köln wirklich abgeht. Erlebe die Stadt von ihrer lebendigsten Seite, mit exklusiven Events, die deine Nächte unvergesslich machen. Von geheimen Bar-Hopping-Touren über atemberaubende Live-Konzerte bis hin zu Ausstellungen junger Künstler – wir haben alles, was das junge Herz begehrt. Sei dabei, wenn Köln seine kreativsten Facetten zeigt, und werde Teil einer Community, die die Nacht zum Leben erweckt. Verpasse keine Gelegenheit, die Stadt in ihrem ganzen Glanz zu erleben – mit uns bist du immer am Puls des Geschehens. Köln wartet auf dich: Entdecke, feiere und verbinde dich mit Gleichgesinnten. Deine Reise in die Kölner Kulturszene beginnt hier. Sei dabei!</p>
      <h1>Featured</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Link to="/Featured1"> <div className="card">
          <div className="first-content">
          <img src={`${process.env.PUBLIC_URL}/popup.jpg`} alt="Bildbeschreibung" />

          </div>
          <div className="second-content">
            <span>Info</span>
          </div>
        </div>
        </Link>
        <Link to="/Featured2">
        <div className="card">
          <div className="first-content">
          <img src={`${process.env.PUBLIC_URL}/collective.jpg`} alt="Bildbeschreibung" />
          </div>
          <div className="second-content">
            <span>Info</span>
          </div>
        </div>
        </Link>
        <div className="card">
          <div className="first-content">
            <span>Hier könnte ihr Event stehen</span>
          </div>
          <div className="second-content">
            <span>Info</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
