import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importiere Link


const Navbar = () => {
  // DropdownMenu-Komponente innerhalb der Navbar definieren
  function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
      <div className="dropdown">
        <button onClick={toggleDropdown} className="menubutton full-rounded">
          <span>Menü</span>
          <div className="border full-rounded"></div>
        </button>
        {isOpen && (
          <div className="dropdown-content">
           <Link to="/NewEvent"> <button className="menuitem full-rounded">Neues Event</button></Link>
           {/* <button className="menuitem full-rounded">Featured</button>*/}
            <button className="menuitem full-rounded">Impressum</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <nav>
      <div className="dropdown">
        {/* DropdownMenu-Komponente einfügen */}
        <DropdownMenu />
      </div>
      <Link to="/MapView"><header className="header">Topspots</header> </Link>
      <h1 className="CfK">Cologne für Kölner</h1>
     
      <Link to="/EventView"> {/* Verwende Link für den Button */}
      <button className="eventbutton full-rounded">
        <span>Alle Events</span>
        <div className="border full-rounded"></div>
      </button>
      </Link>
      {/* Weitere Navigationslinks */}
    </nav>
  );
};

export default Navbar;