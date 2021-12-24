import './App.css';
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Landing from './components/Landing'
import Nav from './components/Nav'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Thanks from './components/Thanks';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Landing}/>
        <div>
          <Nav/>
          <About/>
          <Projects/>
          <Contact/>
          <Thanks/>
        </div>
    </div>
  );
}

export default App;
