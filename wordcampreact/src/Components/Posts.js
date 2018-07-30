import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";


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
			if(error) return `Error! ${error.message}`;
// console.log(data.posts);
// console.log(data.posts.edges);
			return( 
				<div>
					{
						data.posts.edges.map(node => (
							console.log(node.node)
						))

					}
				</div>
			);
		}
	}
	</Query>
);

export default Posts;