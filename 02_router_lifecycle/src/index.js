import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

// CSS
import './css/styles.css';

// COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import Life from './components/life';
import Conditional from './components/conditional';
import User from './components/user';

//localhost/posts
//localhost/profile/posts

class App extends Component {
  render(){ 
    return (
      <Router>
        <div>
          <header>
            <NavLink to="/">Home</NavLink><br/>
            <NavLink 
              to="/posts"
              activeClassName="selected"
            >Posts</NavLink><br/>
            <NavLink to={{
              pathname: '/profile',
              hash: '#alan',
              search: '?profile=true'
            }}>Profile</NavLink><br/>
            <NavLink to="/life">Life</NavLink><br/>
            <NavLink to="/conditional">Conditional</NavLink><br/>
            <NavLink to="/user">User</NavLink><br/>
            <hr/>
          </header>
          <Switch>
            <Route path="/posts/:id/:username" component={PostItem}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/life" component={Life}/>
            <Route path="/conditional" component={Conditional}/>
            <Route path="/user" component={User}/>
            <Route path="/" exact component={Home}/>
            <Route render={() => <h3>Oops!! 404</h3>}/>
          </Switch>  
          
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App/>, 
  document.querySelector('#root')
);
