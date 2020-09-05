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
  const [counter,setCounter] = useState(0);

  const addCounter = () => setCounter(counter+1);

  return (
    <div className="App">
      <Router>
        <NavBar routes={routes} />
        <p>{counter}</p>
        <Switch>
          {routes.map((route,index) => (
            <Route key={index} path={route.path} exact >
              <route.component counter={counter} addCounter={addCounter} />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
