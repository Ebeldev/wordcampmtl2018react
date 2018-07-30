import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Posts from "./Components/Posts";
// import Dogs from "./Components/Dogs";
// import Query from "./Components/Posts";

const client = new ApolloClient({
  uri: "http://localhost/wordcamp2018/graphql"
   // uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

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
              <li>
                {/*<Link to="/dogs">dogs</Link>*/}
              </li>
            </ul>
            <Route path="/" component={Home}/>
            {/*<Route path="/dogs" component={Dogs}/>*/}
            <Route path="/posts" component={Posts}/>
            {/*<Route path="/posts" component={Posts}/>*/}

          </div>
        </Router>
      </ApolloProvider>  
    );
  }
}

export default App;
