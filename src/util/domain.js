export default process.env.NODE_ENV === "development"
  ? "http://localhost:2000"
  : process.env.NODE_ENV === "production" &&
    "https://snippets-server-manager.herokuapp.com";
