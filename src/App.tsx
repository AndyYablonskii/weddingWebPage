import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { Hero } from './components/Hero.tsx';
import { PreMain } from './components/PreMain.tsx';
import { Main } from './components/Main.tsx';
import { Colors } from './components/Colors.tsx';
import { History } from './components/History.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Timer } from './components/Timer.tsx';
import { Ending } from './components/Ending.tsx';

import './App.css';

export const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Hero />
      <PreMain />
      <Main />
      <Colors />
      <History />
      <FAQ />
      <Timer />
      <Ending />
    </>
  );
};