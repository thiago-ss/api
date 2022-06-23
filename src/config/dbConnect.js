import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://thiago:JrddfP9WH3u1X6zr@restapi-compass.dn1da.mongodb.net/RestAPI-Compass");

let db = mongoose.connection;

export default db;