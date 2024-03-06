const mongoose = require( "mongoose" ) ;

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");


  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
  });
