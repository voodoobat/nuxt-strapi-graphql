export default {
  schema: "http://localhost:1337/graphql",
  // documents: ["**/*.ts", "**/*.vue"],
  generates: {
    "./graphql/": {
      preset: "client",
    },
  },
};
