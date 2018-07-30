import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";


const Get_Posts = gql`
	{
		posts(first:2){
         edges {
           node{
             title,
             slug,
             categories {
               edges {
                 node {
                   name
                 }
               }
             }
           }
         }
       }
	}

`;

const Posts = () => (
	<Query query={Get_Posts}>
	{
		({ loading, error, data}) => {
			if(loading) return "Loading...";
			if(error) return "Error! ${error.message}"

			return( console.log(data) )
		}
	}
	</Query>
);

export default Posts;