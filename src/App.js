import React from 'react';
import{ BrowserRouter as Router, Route } from 'react-router-dom';

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
      <Route path="/"> 
        <TickerHeader />  
      </Route>


    </Router>
  )

  // <div className="App">
  //   <TickerHeader />
  //   <MenuHeader />
  //   <AuthHeader />
  //   <AboutPage />
  //   <StockNewsPage />
  //   <PortfolioPage />
  //   <StatsWatchPage />
  // </div>

}

export default App;
