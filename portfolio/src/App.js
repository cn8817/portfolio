import './App.css';
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Landing from './components/Landing'
import Nav from './components/Nav'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  return (
    <div className='App'>
      <Switch>
      <Route exact path='/' component={Landing}/>
        <div>
          <Nav/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/about' component={About}/>
        </div>
      </Switch>
    </div>
  );
}

export default App;
