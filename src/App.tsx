import React from "react";
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './component/SignUp/SignUp'
import LogIn from './component/LogIn/LogIn'
import Home from './component/Home/Home'
import history from './config/history'


export default function App() {
  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/SignUp">SignUp</Link>
            </li>
            <li>
              <Link to="/LogIn">LogIn</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/LogIn" component={LogIn}>
          </Route>
          <Route path="/SignUp" component={SignUp}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



