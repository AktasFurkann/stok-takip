const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://aktasfurkaann:KnsAJZ0mfYH7wFDm@cluster0.sdxdfua.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to database"))
  .catch(error => console.log("db connection error!", error));
