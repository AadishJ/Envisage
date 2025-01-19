import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
// import HeatMap from './Components/HeatMap';
import Aadhar from './Pages/Aadhar';
import {ToastContainer} from 'react-toastify';
import Complaint from './Pages/Complaint';
import Navbar from './Components/Navbar';
import FAQ from './Pages/FAQ';
import About from './Pages/About';
import background from './assets/background.jpg';
import Log from './Components/Log';


const App = () => {
  return (
    <div className='w-full h-full'>
      {/* <img src={background} className='opacity-50 fixed' alt="" /> */}
      <Router>
        <Navbar />
        <ToastContainer theme='dark' position='bottom-center' autoClose='1500' />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/aadhar' exact element={<Aadhar />} />
          <Route path='/complaint' exact element={<Complaint />} />
          <Route path='/faq' exact element={<FAQ/>} />
          {/* <Route path='/heatmap' exact element={<HeatMap />} /> */}
          <Route path='/about' exact element={<About />} />
          <Route path='/log' exact element={<Log />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;