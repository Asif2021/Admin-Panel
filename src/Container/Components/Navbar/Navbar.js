import React from 'react';
import { Search, Person, Speedometer2 } from 'react-bootstrap-icons';
import { FcContacts, FcHome } from 'react-icons/fc';
import Offcanvas from '../Offcanvas/Offcanvas';
import { Link } from 'react-router-dom';
import OffCanvasTriger from '../Offcanvas/OffCanvasTriger';

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top mt-1'>
        <div className='container-fluid'>
          {/* offcanvas trigger */}
          <OffCanvasTriger/>
          <Link to='/' className='navbar-brand fw-bold text-uppercase me-auto'>
            electro medical care
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <form className='d-flex ms-auto'>
              <div className='input-group mb-3 my-3 my-lg-0'>
                <input
                  type='text'
                  className='form-control'
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
                <button
                  className='btn btn-outline-primary'
                  type='button'
                  id='button-addon2'
                >
                  <Search />
                </button>
              </div>
            </form>
            <ul className='navbar-nav mb-2 mb-lg-0'>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <Person size={35} />
                </a>
                <ul
                  className='dropdown-menu dropdown-menu-end'
                  aria-labelledby='navbarDropdown'
                >
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <- Navbar end -> */}
      {/* offcanvas */}
      <Offcanvas />
      {/* offcanvas end */}
    </div>
  );
};

export default Navbar;
