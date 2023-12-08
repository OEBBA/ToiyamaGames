// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Games from './components/Games';
import KrpgInfo from './serviceDetails/KrpgInfo';
import DbzBattlerInfo from './serviceDetails/DbzBattlerInfo';
import LegendsInfo from './serviceDetails/LegendsInfo';
import CasinoInfo from './serviceDetails/CasinoInfo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/krpg-discord-bot'
          element={<KrpgInfo />}
        />
        <Route
          path='/dbz-battler-pvp'
          element={<DbzBattlerInfo />}
        />
        <Route
          path='/isekai-casino-discord-bot'
          element={<CasinoInfo />}
        />
        <Route
          path='/anime-legends-card-game'
          element={<LegendsInfo />}
        />
       <Route
  path='/'
  element={<Layout style={{ height: '200vh', width: '200vw' }}><Games /></Layout>}
/>
      </Routes>
    </Router>
  );
};

export default App;
