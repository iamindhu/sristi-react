import React, { useEffect } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Navbar from './Navbar';
import MainBanner from './MainBanner';
import SetupPipeline from './SetupPipeline';
import Toolbar from './Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import WOW from 'wowjs';

function App() {
  useEffect(() => {
    document.title = 'AI/CV Pipeline';
    new WOW.WOW().init();
  }, []);

  return (
    <div>
      <Navbar />
      <MainBanner />
      <SetupPipeline />
      <Toolbar />
    
     
    </div>
  );
}

export default App;
