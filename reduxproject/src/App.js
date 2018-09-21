import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import HomeComponent from "./container/home";
import User from "./components/User";
import Product from "./components/Product";
import './active.css';



const App = () => (
  
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/product" activeClassName="active">Product</NavLink>
        </li>
        <li>
          <NavLink to="/user" activeClassName="active">User</NavLink>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/product" component={Product} />
        <Route path="/user" component={User} />
      </Switch>
    </div>
  </BrowserRouter>
);



export default App;
