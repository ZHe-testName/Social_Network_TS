// import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Dialogs from './components/dialogs';
import Header from './components/header';
import Music from './components/musik';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Settings from './components/settings';
import News from './components/news';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>

        <div className="main-content">
          {/* <Route component={Dialogs}/>
          <Route component={News}/>
          <Route component={Settings}/> */}
          <Route component={Profile}/>
          <h1>app</h1>
          {/* <Route component={Music}/> */}
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
