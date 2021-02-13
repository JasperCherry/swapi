import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
  query GetCountries {
  	allPeople {
  		people {
        name
        height
      }
  	}
  }
`;
