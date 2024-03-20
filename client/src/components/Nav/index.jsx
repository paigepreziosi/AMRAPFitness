import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

   return <nav className="nav">
       {/* <Link to='/'> <img src={Logo} /></Link> */}
       <a href="/" src='./images/amrap.png' className="site-title">
       <div className="flex items-end">
         <img className="logo" src="./images/amrap.png" alt="Logo"></img>
       </div>
       </a>
       <ul>
           <li className="active">
               <a href=''>Exercises</a>
           </li>
           <li className="active">
               <a href=''>Calendar</a>
           </li>
           <li className="active">
               <a href=''>Login</a>
           </li>
       </ul>
   </nav>

}

export default Navbar;