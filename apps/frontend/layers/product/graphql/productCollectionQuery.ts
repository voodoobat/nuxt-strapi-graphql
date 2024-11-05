export const productCollectionQuery = gql`
  query ProductCollection {
    products {
      documentId
      name
      price
      brand {
        name
      }
    }
  }
`;
