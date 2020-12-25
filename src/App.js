
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BuergerService from './BuergerService';
import Kultur from './Kultur';
import Rad from './Rad';
import Ortsteile from './Ortsteile';
import Einort from './Einort';

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
        <Route path="/ortsteile">
          <Ortsteile></Ortsteile>
        </Route>
        <Route path="/burgliebenau">
          <Einort></Einort>
        </Route>
        <Route path="/rad">
            <Rad></Rad>
          </Route>
          <Route path="/Kultur">
            <Kultur></Kultur>
          </Route>
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
