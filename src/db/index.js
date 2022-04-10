const mongoose = require("mongoose");
function createConnection(){
  const connectionURl = "mongodb://localhost:27017/meetups";
  return mongoose.connect(connectionURl);
}

module.exports = {createConnection}