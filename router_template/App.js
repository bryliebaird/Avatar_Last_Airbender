import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import About from './components/pages/About';
import Character from './components/pages/Character';
import Quiz from './components/pages/Quiz';
   
import './App.css';

const App = () => {
     return (
        <Router>
            <div className="App">
               <div className="container">
                     <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/character">Character</Link></li>
                        <li><Link to="/quiz">Quiz</Link></li>
                     </ul>
                     <hr/>
                        <Route path="/quiz" component={Quiz} />
                        <Route path="/about" component={About} />
                        <Route path="/character" component={Character} />
               </div>
            </div>
        </Router>
      )
   };

export default App;