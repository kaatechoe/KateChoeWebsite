import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Resume from "./Components/Resume";
import Home from "./Components/Home";
import Project from "./Components/Projects";

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Font, {Text} from 'react-font';

const App = () => {
  return (
    <section className="App">
      <Font family='Cabin'>
      <BrowserRouter>
        <header className="App-header">
        <Header></Header>
        </header>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path='/resume' component={Resume}/>
          <Route path='/projects' component={Project}/>
        </Switch>
      </BrowserRouter>
      <footer className="App-footer">
        <Footer></Footer>
      </footer>
      </Font>
    </section>
  )
}
export default App;
