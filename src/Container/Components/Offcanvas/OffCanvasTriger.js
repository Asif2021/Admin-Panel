import React from 'react'

const OffCanvasTriger = () => {
    return (
        <>
            <button
            className='navbar-toggler me-2'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasExample'
            aria-controls='offcanvasExample'
          >
            <span
              className='navbar-toggler-icon'
              data-bs-target='#offcanvasExample'
            ></span>
          </button>
        </>
    )
}

export default OffCanvasTriger
