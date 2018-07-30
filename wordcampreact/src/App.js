import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Posts from "./Components/Posts";
// import Query from "./Components/Posts";

const client ={
  uri: "http://localhost/wordcamp2018/graphql"
}

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
        <div>
          
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
          <Route path="/" component={Home}/>
          {/*<Route path="/posts" component={Posts}/>*/}
          <Route path="/posts" component={Posts}/>

        </div>
        </Router>
      </ApolloProvider>  
    );
  }
}

export default App;
