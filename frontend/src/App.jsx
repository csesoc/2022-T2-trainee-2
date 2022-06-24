import React from 'react';
import {
  Route, BrowserRouter, Routes,
} from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import SwipingPage from './pages/SwipingPage';
import YourMatchesPage from './pages/YourMatchesPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/profile"
          element={<ProfilePage />}
        />
        <Route
          path="/swiping"
          element={<SwipingPage />}
        />
        <Route
          path="/your-matches"
          element={<YourMatchesPage />}
        />
        <Route
          path="/"
          element={<LandingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
