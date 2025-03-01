export default {
  client: {
    includes: ["apps/frontend/**/*.ts", "apps/frontend/**/*.vue"],
    service: {
      name: "backend",
      url: "http://localhost:1337/graphql",
    },
  },
};
