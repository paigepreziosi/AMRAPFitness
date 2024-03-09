
// import { Outlet } from 'react-router-dom';
import React from 'react';
import Dashboard from './components/Dashboard';
import backgroundImage from '../images/background.jpg';
import Footer from './components/Footer/';

const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
};

const App = () => {
  return (
    <div style={divStyle}>
      <Dashboard />;
      {/* <Outlet />; */}
      <Footer />;
    </div>
    
  );
};


export default App;