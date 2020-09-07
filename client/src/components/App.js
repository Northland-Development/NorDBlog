import React, {useState} from 'react';
import NavBar from './NavBar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {createPosts} from '../helpers';
import routes from '../Routes';

const blogs = createPosts(10);


function App() {
  const [posts,setPosts] = useState(blogs);
  const updatePosts = (newPosts) => setPosts(newPosts);


  return (
    <div className="App">
      <Router>
        <NavBar routes={routes} />
        <Switch>
          {routes.map((route,index) => (
            <Route key={index} path={route.path} exact >
              <route.component posts={posts} updatePosts={updatePosts} />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
