const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_CONN;
const client = new MongoClient(uri,
    { useNewUrlParser: true, useUnifiedTopology: true })

let db;

const connect = async () => {
    if (!db) {
        try {
            await client.connect();
            db = client.db('Cluster0');
        } catch(err) {

        }
    }
    return db;
}

const insertOne = async (collectionName, document) => {
    const db = await connect();
    db.collection(collectionName).insertOne(document);
}

const findOne = async (collectionName, document) => {
}

module.exports = {
    findOne,
    insertOne
}
