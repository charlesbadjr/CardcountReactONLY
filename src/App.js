import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import './Styles/Files.css';
import Home from './Home';
import PlayCards from './PlayCards';


class App extends Component {
  render() {
    
    return (
      <div className="app">
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/PlayCards" component={PlayCards} />
            <Route component={NoMatch} />
          </Switch>
     
      </div>
    );
  }
}

export default App;

