import React from 'react'
import { Link } from "react-router-dom";
import { Routes, Route, } from "react-router-dom";
import About from './About';
import Home from './Home';
import Career from './Career';
import Help from './Help';
import Contact from './Contact';
import Error from './Error';

export default function NavBar() {
  return (
    <div>

      <div id="navbar-sec">
        <table>
          <tr>
            <td>
              <nav>
                <Link to="Home">Home</Link> <br/>
                <Link to="About">About</Link> <br/>
                <Link to="Career">Career</Link> <br/>
                <Link to="Contact">Contact</Link> <br/>
                <Link to="Help">Help</Link>
              </nav>
            </td>
            <td>
              <div id="roting-sec">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Career" element={<Career />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/Help" element={<Help />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </div>
            </td>
          </tr>
        </table>
      </div>

    </div>
  )
}
