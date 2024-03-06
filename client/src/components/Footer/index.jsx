import React from "react";
import { Link } from "react-router-dom";


const Footer = () =>{
    return(
        <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col1">
            <h4>Members</h4>
            <ui className="list-unstyled">
              <li>Paige Preziosi</li>
              <li>AJ Generoso </li>
              <li>Michael Neal</li>
              <li>Aaron Corbett</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col2">
            <h4>Test</h4>
            <ui className="list-unstyled">
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col3">
            <h4>Muscle Groups</h4>
            <ui className="list-unstyled">
              <li>Arms</li>
              <li>Back</li>
              <li>Legs</li>
              <li>Chest</li>
              <li>Abs</li>

            </ui>
            </div>
            <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} AMRAP  |  All rights reserved  | 
            Terms Of Service  |  Privacy
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;