// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Clergy from './pages/Clergy';
import Outstations from './pages/Outstations';
import Groups from './pages/Groups';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import LandingPage from './pages/LandingPage';
import FirstMass from './pages/FirstMass';
import SecondMass from './pages/SecondMass';
import ThirdMass from './pages/ThirdMass';
import StPaulGachororo from './pages/StPaulGachororo';
import MaryMotherOfGodMirimaini from './pages/MMG';
import AboutParish from './pages/AboutParish';
import SaintAugustine from './pages/SaintAugustine';
import MassReadingsPrayers from './pages/MassReadingsPrayers';
import LiveStreaming from './pages/LiveStreaming';
import VaticanNews from './pages/VaticanNews';
import SpiritualResources from './pages/SpiritualResources';
import CMA from './pages/CMA';
import CWA from './pages/CWA';
import YSC from './pages/YSC';
import YCA from './pages/YCA';
import PMC from './pages/PMC';
import MYM from './pages/MYM';
import Choir from './pages/Choir';
import SacredHeartOfJesus from './pages/SacredHeartOfJesus';
import LegionOfMary from './pages/LegionOfMary';
import SelfHelpGroup from './pages/SelfHelpGroup';
import './index.css'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/clergy" element={<Clergy />} />
            <Route path="/outstations" element={<Outstations />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/outstations/first-mass" element={<FirstMass />} />
            <Route path="/outstations/second-mass" element={<SecondMass />} />
            <Route path="/outstations/third-mass" element={<ThirdMass />} />
            <Route path="/outstations/st-paul-gachororo" element={<StPaulGachororo />} />
            <Route path="/outstations/mary-mother-of-god-mirimaini" element={<MaryMotherOfGodMirimaini />} />
            <Route path="/about-parish" element={<AboutParish />} />
            <Route path="/saint-augustine" element={<SaintAugustine />} />
            <Route path="/mass-readings-prayers" element={<MassReadingsPrayers />} />
            <Route path="/live-streaming" element={<LiveStreaming />} />
            <Route path="/vatican-news" element={<VaticanNews />} />
            <Route path="/spiritual-resources" element={<SpiritualResources />} />
            <Route path="/groups/cma" element={<CMA />} />
            <Route path="/groups/cwa" element={<CWA />} />
            <Route path="/groups/ysc" element={<YSC />} />
            <Route path="/groups/yca" element={<YCA />} />
            <Route path="/groups/pmc" element={<PMC />} />
            <Route path="/groups/mym" element={<MYM />} />
            <Route path="/groups/choir" element={<Choir />} />
            <Route path="/groups/sacred-heart-of-jesus" element={<SacredHeartOfJesus />} />
            <Route path="/groups/legion-of-mary" element={<LegionOfMary />} />
            <Route path="/groups/self-help-group" element={<SelfHelpGroup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
