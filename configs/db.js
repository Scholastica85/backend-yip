import dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from 'mongodb';


// Takes the database cluster URI as an argument and creates a new instance of the mongoClient.
const MONGO_URI = 'mongodb+srv://amaka:g8NewcYFNoJLNJ6X@cluster0.p9oyhbc.mongodb.net/?retryWrites=true&w=majority'
const dbClient = new MongoClient(process.env.MONGO_URI);

/**
 * Connects to the mongo database and returns a userCollection to be used to perform CRUD operations on the users record
 * @returns {object} - userCollection
 */
async function connectDb() {
  try {
    await dbClient.connect();
    console.log('Database connected');
    const db = dbClient.db('yipREST');
    const userCollection = db.collection('users');
    return userCollection;
  } catch (error) {
    console.error('Mongo connection error', error.message);
    throw error;
  }
}

const userCollection = await connectDb();

export { userCollection };
