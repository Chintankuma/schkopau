
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BuergerService from './BuergerService';

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
        <Route path="/BuergerService">
            <BuergerService></BuergerService>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
