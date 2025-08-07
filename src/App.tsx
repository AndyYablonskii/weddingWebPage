import React from 'react';
import { Hero } from './components/Hero.tsx';
import './App.css';
import { PreMain } from './components/PreMain.tsx';
import './components/PreMainStyle.css';
import { Main } from './components/Main.tsx';
import './components/MainStyle.css';
import{ Colors } from './components/Colors.tsx';
import './components/Colors.css';
import { History } from './components/History.tsx';
import FAQ from './components/FAQ.tsx';
import { Timer } from './components/Timer.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import './components/FAQStyle.css';
import { End } from './components/Ending.tsx';

export const App = () => {
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
      <End />

  </>
  );
};



