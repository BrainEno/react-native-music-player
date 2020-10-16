import { gql } from "@apollo/client";

export const GET_ALBUM = gql`
  query getAlbum($id: ID!) {
    album(where: { id: $id }) {
      id
      name
      by
      numberOfLikes
      imageUri
      artistHeadline
      songs {
        title
        artist
        id
        imageUri
        uri
        artist
        albumId
      }
      albumCategoryId
    }
  }
`;
