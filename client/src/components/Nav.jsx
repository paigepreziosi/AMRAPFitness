
// import { Link } from 'react-router-dom';
import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
    <ul className="nav nav-tabs">

      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#athlete"
          onClick={() => handlePageChange('Athlete')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Athlete' ? 'nav-link active' : 'nav-link'}
        >
          Athlete
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#exercisePage"
          onClick={() => handlePageChange('ExercisePage')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'ExercisePage' ? 'nav-link active' : 'nav-link'}
        >
          Exercises
        </a>
      </li>

    </ul>
    </div>
    </nav>  
  );
}

export default NavTabs;
