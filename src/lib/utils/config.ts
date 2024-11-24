export const COUCHDB_URL =
    process.env.NODE_ENV === "production"
        ? "https://fancy-couchdb-templ-production.up.railway.app"
        : "http://localhost:5984";

export const EXPRESS_URL =
    process.env.NODE_ENV === "production"
        ? "https://resume-to-pdf-api-bd4378b476af.herokuapp.com"
        : "http://localhost:3000";

export const GITHUB_CLIENT_ID = "Ov23liY5r3YBvIlRbbe3";

export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`;
