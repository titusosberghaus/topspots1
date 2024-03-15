import './App.css';
import React from 'react';
import MapView from './MapView';
import ListView from './ListView';
import Navbar from './Navbar';
import EventForm from './EventForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventView from './EventView';
import Featured1 from './Featured1';
import Featured2 from './Featured2';
import Featured3 from './Featured3';
import NewEvent from './NewEvent';
import 'leaflet/dist/leaflet.css';

{/*import '@coreui/coreui/dist/css/coreui.min.css';*/}





function App() {
  return (
    <Router>
      <div className='App'>
          <Navbar />
             <div className='content'>
            <Routes>
            <Route path="/MapView" element={<MapView />} /> {/* Verwende MapView als Route */}
            <Route path="/EventView" element={<EventView />} /> {/* Verwende EventView als Route */}
            <Route path="/Featured1" element={<Featured1 />} />
            <Route path="/Featured2" element={<Featured2 />} />
            <Route path="/Featured3" element={<Featured3 />} />
            <Route path="/NewEvent" element={<NewEvent />} />
          </Routes>
         
          
           {/*<EventForm />
         {/*<ListView />*/}
      </div>
    </div>
  </Router>
  );
}

export default App;
