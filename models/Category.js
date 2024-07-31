const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: "",
  },
  user: {
    ref: 'users', // it will be referens on another collection
    type: Schema.Types.ObjectId,
    // so we will store user id
  },
});

// we create collection of model base on schema and export it
module.exports = mongoose.model("categories", categorySchema);
