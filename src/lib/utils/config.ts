export const COUCHDB_URL =
    process.env.NODE_ENV === "production"
        ? "https://custom-couchdb-railway-template-production.up.railway.app"
        : "http://localhost:5984";

export const EXPRESS_URL =
    process.env.NODE_ENV === "production"
        ? "https://calm-anchorage-52600-ec637b7ee2c6.herokuapp.com"
        : "http://localhost:3000";
