import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { Hero, PreMain, Main, Colors, History, FAQ, Timer, Ending } from './components/index.ts';

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
      {/* <Carousel /> */}
      <FAQ />
      <Timer />
      <Ending />
    </>
  );
};