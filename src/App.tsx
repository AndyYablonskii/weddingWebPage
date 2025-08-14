import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { Hero, PreMain, Main, Colors, History, FAQ, Timer, Ending, Carousel } from './components/index.ts';

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
      <Carousel  images = {[
        {src: '/assets/carousel/2.png', alt: 'carousel 2'},
        { src: '/assets/carousel/1.png', alt: 'carousel 1' },
        // {src: '/assets/carousel/5.png', alt: 'carousel 5'},
        {src: '/assets/carousel/6.png', alt: 'carousel 6'},
        { src: '/assets/carousel/10.png', alt: 'carousel 10' },

        // {src: '/assets/carousel/7.png', alt: 'carousel 7'},
        {src: '/assets/carousel/8.png', alt: 'carousel 8'},
        {src: '/assets/carousel/15.png', alt: 'carousel 15'},
        // {src: '/assets/carousel/9.png', alt: 'carousel 9'},
        {src: '/assets/carousel/11.png', alt: 'carousel 11'},
        {src: '/assets/carousel/14.png', alt: 'carousel 14'},
        {src: '/assets/carousel/12.png', alt: 'carousel 12'},
        {src: '/assets/carousel/24.png', alt: 'carousel 24'},
        // { src: '/assets/carousel/21.png', alt: 'carousel 21' },
        {src: '/assets/carousel/17.png', alt: 'carousel 17'},
        { src: '/assets/carousel/3.png', alt: 'carousel 3' },
        { src: '/assets/carousel/23.png', alt: 'carousel 23' },
        { src: '/assets/carousel/13.png', alt: 'carousel 13' },
        {src: '/assets/carousel/18.png', alt: 'carousel 18'},
        {src: '/assets/carousel/19.png', alt: 'carousel 19'},
        // {src: '/assets/carousel/4.png', alt: 'carousel 4'},
        // { src: '/assets/carousel/24.png', alt: 'carousel 24' },
        // { src: '/assets/carousel/20.png', alt: 'carousel 20' },
        { src: '/assets/carousel/22.png', alt: 'carousel 22' },
        // { src: '/assets/carousel/25.png', alt: 'carousel 25' },
        // { src: '/assets/carousel/26.png', alt: 'carousel 26' },
        // { src: '/assets/carousel/27.png', alt: 'carousel 27' },
      ]}/>
      <FAQ />
      <Timer />
      <Ending />
    </>
  );
};