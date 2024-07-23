const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now, // mongoose will fill out that place base on current data
  },
  order: {
    type: Number,
    required: true,
  },
  list: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      cost: { type: Number, required: true },
    },
  ],
  user: {
    ref: "users",
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("orders", orderSchema);
