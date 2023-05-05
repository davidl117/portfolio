import React from 'react';
import "./styles.css";
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Work from './Components/Work';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className='app-container'>
      <Navigation />
      <Header/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}