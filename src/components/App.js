import React, {useState} from 'react';
import NavBar from './NavBar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Root from './Root';
import Posts from './Posts';

const routes = [
  {
    path: "/",
    name: "Root",
    component: Root
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts
  }
];


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar routes={routes} />
        <Switch>
          {routes.map((route,index) => (
            <Route key={index} path={route.path} component={route.component} exact />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
