export const productCollectionQuery = gql`
  query Query {
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
