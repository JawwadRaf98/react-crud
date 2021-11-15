
import './App.css';
import Header from './Component/Layout/Header.js'
import {BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import Home from './Component/Home.js'
import Contact from './Component/Contact.js'
import About from './Component/About.js'

function App() {
  return (
    <Router>    
      <div className="App">
      <Header />
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />        
      </Switch>
      </ div>
    </Router>

  );
}

export default App;
