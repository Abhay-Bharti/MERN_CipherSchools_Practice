const { connect } = require("mongoose");
const Mongo_URL = "mongodb+srv://abhaybharti2123:Abhay0192@cluster0.n7mwa7p.mongodb.net";
const Db_Name = "cs-mern";

async function MongoConnect() {
    await connect(`${Mongo_URL}/${Db_Name}`);
    console.log("Database Connected");
}

MongoConnect();