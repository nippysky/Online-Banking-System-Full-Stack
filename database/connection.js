import mongoose from "mongoose";

const mongoUri = process.env.DATABASE;

const connection = {};
async function connect() {
  if (connection.isConnected) {
    console.log("Already Connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("Use previous connection");
      return;
    }
    await mongoose.disconnect();
  }
  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(mongoUri, { useNewUrlParser: true });
  console.log("New connection");
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("Not Disconnected");
    }
  }
}

const db = { connect, disconnect };
export default db;
