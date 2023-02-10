
import './App.css';
import Header from './Header';
import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
// import { Widgets } from '@mui/icons-material';
function App() {
  return (

    <div className="app">

    {/* Header */}

      <Header/>

      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets/>
      {/* Widgets */}

      </div>


      
    </div>
  );
}

export default App;
