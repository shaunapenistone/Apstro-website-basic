
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import { Helmet } from 'react-helmet';
import ReactGa from 'react-ga';

import './App.css';

function App() {

  useEffect(() => {
    ReactGa.initialize('UA-196896744-1');
    ReactGa.pageview('/app')
    console.log('mounted')
  }, [])

  return (
    <>
      <Router>
        <Helmet>
          <title>Apstro - Free Birth Chart Readings</title>
          <meta 
            name='description'
            content='natal chart readings, compatibility, synastry, horescopes and astrology charts'
          />
          <meta 
            name='keywords'
            content="birth chart,cafe astrology,compatibility,apstro,moon sign,rising sign,astro cafe,astrology chart,venus sign,sun sign,sidereal chart,horoscope,north node,birth chart wheel,interpretation,aries,taurus,gemini,cancer,leo,virgo,libra,scorpio,sagittarius,capricorn,aquarius,pisces"
          />
        </Helmet>
        <Navbar />
          <Switch>
            <Route path="/" component={LandingPage}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;