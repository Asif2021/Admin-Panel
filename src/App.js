import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import Routing from './Container/Routing/Routing';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Container/Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routing />
      </div>
    </Router>
  );
}

export default App;
