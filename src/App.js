// import React from 'react';
import{ BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './Base.scss';

import TickerHeader from './shared/components/Navigation/TickerHeader';
import MenuHeader from './shared/components/Navigation/MenuHeader';
import AuthHeader from './shared/components/Navigation/AuthHeader';
import AboutPage from './focusAreas/pages/AboutPage';
import StockNewsPage from './focusAreas/pages/StockNewsPage';
import PortfolioPage from './focusAreas/pages/PortfolioPage';
import StatsWatchPage from './focusAreas/pages/StatsWatchPage';
import Users from './user/pages/Users';

const App = () => {

  return (
    <Router>
      <TickerHeader />  
      <AuthHeader />  
      <MenuHeader />  
      <Users />
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
        <Route path="/Stats" exact> 
          <StatsWatchPage />  
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
