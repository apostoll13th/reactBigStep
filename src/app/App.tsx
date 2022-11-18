import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import { Navbar } from 'widgets/index';
import AppRouter from './router/AppRouter';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';


const App = () => {
   const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
      <Navbar />      
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;
