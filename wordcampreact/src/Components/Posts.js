import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";


import Card from './Card';

const Get_Posts = gql`
	{
		posts(first:5){
         	edges {
           		node{
           			postId
             		title
             		slug
             		categories {
		               edges {
		                 node {
		                   name
		                 }
		               }
             		}
             		featuredImage {
		          		sourceUrl
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

			return( 
				<div style={FlexDiv}>

					{
						data.posts.edges.map( ( edge, i ) => (
							<Card 
								key = {i} 
								id = {edge.node.postId}
								slug = {edge.node.slug} 
								title = {edge.node.title} 
								url = {edge.node.featuredImage.sourceUrl}
							/>
						))

					}
				</div>
			);
		}
	}
	</Query>
);

export default Posts;
const FlexDiv = {
	display: 'flex',
	flexWrap: 'wrap'
}