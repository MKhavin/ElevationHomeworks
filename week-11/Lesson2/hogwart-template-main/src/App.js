import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { CATEGORIES, CHARMS_DATA, POTIONS_DATA, WIZARDS_DATA, HERBOLOGY_DATA } from './Constants';
import HogwartNavbar from './components/Header/HogwartNavbar';
import Entities from './components/Entities/Entities';
import EntityDescription from './components/Entities/EntityDescription';
import About from './components/About'

const App = (props) => {
  const [categories] = useState(CATEGORIES);
  const [potions] = useState(POTIONS_DATA);
  const [charms] = useState(CHARMS_DATA);
  const [wizards] = useState(WIZARDS_DATA)
  const [herbology] = useState(HERBOLOGY_DATA)

  const STATE_MAP = {
    potions: potions,
    charms: charms,
    wizards: wizards,
    herbology: herbology
  }

  const getCategoryData = (category) => {
    return STATE_MAP[category];
  }

  return (
    <Router>
      <div className="App">
        <HogwartNavbar />
      </div>
      <Routes>
        <Route path='/' element=<Home categories={categories} /> />
        <Route path='/wiki/:category' element=<Entities getCategoryData={getCategoryData} /> />
        <Route path='/wiki/:category/:entityName' element=<EntityDescription getCategoryData={getCategoryData} /> />
        <Route path='/about' element=<About /> />
      </Routes>
    </Router>

  );
}

export default App;
