import React from "react";
import { useState } from 'react';
// import { Link } from "react-router-dom";
import Nav from './Nav';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Athlete from '../pages/Athlete';
import ExercisePage from '../pages/ExercisePage';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Athlete') {
      return <Athlete />;
    }
    return <ExercisePage />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}