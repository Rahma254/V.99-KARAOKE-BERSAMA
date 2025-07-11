import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import KaraokeRoom from './pages/KaraokeRoom';
import LiveStream from './pages/LiveStream';
import StartStream from './pages/StartStream';
import Profile from './pages/Profile';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="karaoke/:roomId" element={<KaraokeRoom />} />
        <Route path="stream/:userId" element={<LiveStream />} />
        <Route path="stream/start" element={<StartStream />} />
        <Route path="profile/:userId" element={<Profile />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
