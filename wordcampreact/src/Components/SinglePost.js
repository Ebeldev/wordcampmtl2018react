import React, { Component } from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const Get_Post = gql`
	query getPost($id:ID!){
		post(id:$id){
         	id,
         	title,
         	content
       	}
	}
`;


const SinglePost = ( { id }) => (
	<Query query={Get_Post} variables={{id}}>
	{
		({ loading, error, data}) => {
			if(loading) return "Loading...";
			if(error) return `Error! ${error.message}`;

			return( 
				<div>

					{
						console.log(data)
						// data.post.edges.map( ( edge, i ) => (
						// 	// console.log(edge.node)
						// 	<Card 
						// 		key = {i} 
						// 		slug = {edge.node.slug} 
						// 		title = {edge.node.title} 
						// 		url = {edge.node.featuredImage.sourceUrl}
						// 	/>
						// ))

					}
				</div>
			);
		}
	}
	</Query>
);

export default SinglePost;