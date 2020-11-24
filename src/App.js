// import React from 'react';
import{ BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.scss';

import TickerHeader from './headers/TickerHeader';
import MenuHeader from './headers/MenuHeader';
import AuthHeader from './headers/AuthHeader';
import AboutPage from './pages/AboutPage';
import StockNewsPage from './pages/StockNewsPage';
import PortfolioPage from './pages/PortfolioPage';
import StatsWatchPage from './pages/StatsWatchPage';


const App = () => {

  return (
    <Router>
      <TickerHeader />  
      <AuthHeader />  
      <MenuHeader />  
      <Switch>
        <Route path="/" exact> 
          <StatsWatchPage />
        </Route>
        <Route path="/about" exact> 
          <AboutPage />  
        </Route>
        <Route path="/portfolio" exact> 
          <PortfolioPage />  
        </Route>
        <Route path="/News" exact> 
          <StockNewsPage />  
        </Route>
        <Route path="/about" exact> 
          <AboutPage />  
        </Route>
        <Route path="/" exact> 
          <TickerHeader />  
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )

  // <div className="App">
  // </div>

}

export default App;
