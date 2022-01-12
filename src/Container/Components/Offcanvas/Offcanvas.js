import React from 'react';
// importing icons from react-bootstrap-icons
import {
  Search,
  Person,
  Speedometer2,
  Cast,
  Projector,
  Gear,
} from 'react-bootstrap-icons';
// importing icons from react-icons/fc
import { FcContacts, FcHome } from 'react-icons/fc';
// importing icons from react-icons/fa
import { FaHandsHelping } from 'react-icons/fa';
// importing Link from react-router-dom
import { Link } from 'react-router-dom';

// offcanvas component
function Offcanvas() {
  return (
    <div>
      <div
        className='offcanvas offcanvas-start bg-dark text-white sidebar-nav'
        tabindex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        
        <div className='offcanvas-body p-0'>
          <nav className='navbar-dark'>
            <ul className='navbar-nav'>
              <li>
                <div className='text-muted small fw-bold text-uppercase px-3'>
                  Core
                </div>
              </li>
              <li>
                <Link to='/' className='nav-link px-3 active'>
                  <span className='me-2'>
                    <Speedometer2 />
                  </span>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className='my-4'>
                <hr className='dropdown-divider' />
              </li>
              <li>
                <div className='text-muted small fw-bold text-uppercase px-3'>
                  interface
                </div>
              </li>
              <li>
                <Link to='/' className='nav-link px-3 active'>
                  <span className='me-2'>
                    <FcHome />
                  </span>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/majorprojects' className='nav-link px-3 active'>
                  <span className='me-2'>{<Projector />}</span>
                  Major Projects
                </Link>
              </li>
              <li>
                <Link to='/products' className='nav-link px-3 active'>
                  <span className='me-2'>{<Cast />}</span>
                  Products
                </Link>
              </li>
              <li>
                <Link to='/partner' className='nav-link px-3 active'>
                  <span className='me-2'>
                    <FaHandsHelping />
                  </span>
                  Partner
                </Link>
              </li>
              <li>
                <Link to='/services' className='nav-link px-3 active'>
                  <span className='me-2'>
                    <Gear />
                  </span>
                  Services & Support
                </Link>
              </li>
              <li>
                <Link to='/aboutus' className='nav-link px-3 active'>
                  <span className='me-2'>
                    <Person />
                  </span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/contact' className='nav-link px-3 active'>
                  <span className='me-2'>
                    <FcContacts />
                  </span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Offcanvas;
