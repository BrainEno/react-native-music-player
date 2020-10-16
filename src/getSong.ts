import { gql } from "@apollo/client";

export const GET_SONG = gql`
  query getSong($id: ID!) {
    song(where: { id: $id }) {
      id
      imageUri
      uri
      title
      artist
      albumId
    }
  }
`;
