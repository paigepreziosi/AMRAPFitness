import React from 'react';
// import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer style={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
      padding: '5px'
    }}>

      <div className="col1" style={{
        width: '23%',
        backgroundColor: '#ccc',
        padding: '10px',
        textAlign: 'center'
      }}>
        <h4>Members</h4>
        <ul className="list-unstyled">
          <li>Paige Preziosi</li>
          <li>AJ Generoso </li>
          <li>Michael Neal</li>
          <li>Aaron Corbett</li>
        </ul>
      </div>

      <div className="col2" style={{
        width: '23%',
        backgroundColor: '#ccc',
        padding: '10px',
        textAlign: 'center'
      }}>
        <h4>Test</h4>
        <ul className="list-unstyled">
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>

      <div className="col3" style={{
        width: '23%',
        backgroundColor: '#ccc',
        padding: '10px',
        textAlign: 'center'
      }}>
        <h4>Muscle Groups</h4>
        <ul className="list-unstyled">
          <li>Arms</li>
          <li>Back</li>
          <li>Legs</li>
          <li>Chest</li>
          <li>Abs</li>
        </ul>
      </div>

      <div className="col4" style={{
        width: '23%',
        backgroundColor: '#ccc',
        padding: '10px',
        textAlign: 'center'
      }}>
        <p className="col-sm">
          &copy;{new Date().getFullYear()} AMRAP  |  All rights reserved  |
          Terms Of Service  |  Privacy
        </p>
      </div>
    </footer>
  );
};

export default Footer;