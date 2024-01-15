import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import BannerSmall from './components/BannerSmall';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-screen">
      <Navbar />
      <Header />
      <Services image='' heading='' subheading='' />
      <Testimonials heading='' subheading='' date='' name='' />
      <Banner />
      <Benefits icon='' heading='' subheading='' />
      <BannerSmall />
      <Footer />
    </div>
  );
}

export default App;
