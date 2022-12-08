import mongoose from "mongoose";

async () => {
  try {
    const db = await mongoose.connect(config.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connect : ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};
