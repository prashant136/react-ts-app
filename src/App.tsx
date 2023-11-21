import React from 'react';
import './App.css';
import AddTimer from './components/AddTimer';
import Header from './components/Header';
import Timers from './components/Timers';
import { TimerContextProvider } from './context';

function App() {
  return (
    <TimerContextProvider>
      <Header />
      <AddTimer />
      <Timers />
    </TimerContextProvider>
  );
}

export default App;
