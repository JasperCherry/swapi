import { gql } from '@apollo/client';

export const GET_STARSHIPS = gql`
  query GetStarships {
    allStarships {
  		starships {
        id
        name
        hyperdriveRating
      }
  	}
  }
`;
