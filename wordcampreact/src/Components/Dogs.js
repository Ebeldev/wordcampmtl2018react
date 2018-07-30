import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const Dogs = () => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

        console.log(data.dogs);
      return (
        <div>
          
        </div>
        // <select name="dog" >
        //   {data.dogs.map(dog => (
        //     <option key={dog.id} value={dog.breed}>
        //       {dog.breed}
        //     </option>
        //   ))}
        // </select>
      );
    }}
  </Query>
);

export default Dogs;