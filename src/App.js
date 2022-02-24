import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Movie_Detail from './components/Movie_Detail/Movie_Detail';
import Not_Found from './components/Not_Found/Not_Found'; 
import Footer from './components/Footer/Footer';

import './App.scss'

function App() {
  

  return (
    <Router>
    <div className="App">
        
        <Header />
        
          <div style={{height:'100%'}}>
          
             <Switch>
               <Route exact path='/'> <Home /> </Route>
               <Route path='/movie/:MovieID' component={Movie_Detail} />
               <Route component={Not_Found} />
             </Switch>
          
          </div>
          
        <Footer /> 
        
    </div>
    </Router>
  );

}

export default App;
