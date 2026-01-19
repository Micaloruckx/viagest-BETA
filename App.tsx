import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NewBookingScreen from './screens/NewBookingScreen';
import DriverScreen from './screens/DriverScreen';
import PassengerControlScreen from './screens/PassengerControlScreen';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/new-booking" element={<NewBookingScreen />} />
        <Route path="/driver" element={<DriverScreen />} />
        <Route path="/passengers" element={<PassengerControlScreen />} />
      </Routes>
    </HashRouter>
  );
};

export default App;