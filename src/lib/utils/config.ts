export const COUCHDB_URL =
    process.env.NODE_ENV === "production"
        ? "https://fancy-couchdb-templ-production.up.railway.app"
        : "http://localhost:5984";

export const EXPRESS_URL =
    process.env.NODE_ENV === "production"
        ? "https://calm-anchorage-52600-ec637b7ee2c6.herokuapp.com"
        : "http://localhost:3000";

export const GITHUB_CLIENT_ID = "Ov23liY5r3YBvIlRbbe3";

export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`;
