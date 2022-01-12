import React from 'react';
import Cards from '../Components/Cards/Cards'


function Home() {
  return (
    <>
      <main className='mt-5 pt-3'>
        <div className='container-fluid'>
          <div className='rows'>
            <div className='col-md-12 fw-bold fs-3 text-center text-uppercase'>
              
              <h1> Dashboard</h1>
            </div>
            <div className='row'>
              {/* cards */}
              <Cards
                Header='Header'
                title='Primary card data'
                text='some quick example text to build on the card title and make up the bulk of the cards content'
              />
              <Cards
                Header='Header'
                title='Primary card data'
                text='some quick example text to build on the card title and make up the bulk of the cards content'
              />
              <Cards
                Header='Header'
                title='Primary card data'
                text='some quick example text to build on the card title and make up the bulk of the cards content'
              />
              <Cards
                Header='Header'
                title='Primary card data'
                text='some quick example text to build on the card title and make up the bulk of the cards content'
              />
          </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
