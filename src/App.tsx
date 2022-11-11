import React, { Suspense, useState } from 'react'
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { classNames } from './helpers/classnames';
import About from './pages/about/About';
import { AboutAsync } from './pages/about/About.async';
import Main from './pages/main/Main';
import { MainAsync } from './pages/main/Main.async';
import './styles/index.scss'
import { useTheme } from './theme/useTheme';




const App = () => {


const {theme, toggleTheme} = useTheme()

return (
  <div className={classNames('app', {hovered:true}, [theme,'her2',])}>
      <button onClick={toggleTheme}>Toggle</button>
     <Link to="/"> Main </Link> 
     <Link to="/about"> about </Link> 

  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={ <MainAsync /> } />
      <Route path="/about" element={ <AboutAsync /> } />
    </Routes>
  </Suspense>
    </div>
  );

}


export default App
