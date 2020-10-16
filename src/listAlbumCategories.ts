import { gql } from "@apollo/client";

export const LIST_CATEGORIES = gql`
  query ListCategories {
    albumCategories {
      id
      title
      albums {
        id
        imageUri
        artistHeadline
        name
      }
    }
  }
`;
