import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import Posts from "./Components/Posts";

const client = new ApolloClient({
  uri: "http://localhost/wordcamp2018/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <ul style={MenuStyle}>
              <li style={LiStyle}>
                <Link to="/" style={AStyle}>Home</Link>
              </li>
              <li style={LiStyle}>
                <Link to="/posts" style={AStyle}>Posts</Link>
              </li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/posts" component={Posts}/>
          </div>
        </Router>
      </ApolloProvider>  
    );
  }
}

export default App;

const MenuStyle = {
  listStyleType: 'none',
  display: 'flex',
  backgroundColor: '#E10098',
  padding: '15px'
}

const LiStyle = {
  marginRight: '20px',
}

const AStyle = {
  color: 'white'
}