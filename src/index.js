import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import Topnavigationsec from './Topnavigationsec';

import 'tw-elements';

import Footer from './Components/Footer';
import Topadsplash from './Topadsplash';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUp';
import HoverCartslider from './Components/HoverCartslider';
import Favoriteslider from './Components/Favoriteslider';
import MobileNavbar from './Components/Landing_page/MobileNavbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    
    <Router>
    <Topadsplash />
    
    <Topnavigationsec />
    
    <MobileNavbar />
    <App />
    
    <LoginPage />
    <SignUp />
    <HoverCartslider />
    <Favoriteslider />

    
    <Footer />
    </Router>
    


    {/* first page landing page........ */}
    {/* <Topadsplash />
    <Topnavigationsec />
    <App />
    <Sticky />
    <Section1_hero />
    <Section2 />
    <NewSection1 />
    <Section3 />
    <Section4 />
    <NewSection2 />
    <Section5 />
    <Sectoion6 />
    <Footer /> */}
    {/* <Test /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
