

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    phone: {
      type: String
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    //   wishlist: [{ type: ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
// const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

// const userSchema = new mongoose.Schema(
//   {
//     name: String,
//     email: {
//       type: String,
//       required: true,
//       index: true,
//     },
//     role: {
//       type: String,
//       default: "subscriber",
//     },
//     cart: {
//       type: Array,
//       default: [],
//     },
//     address: String,
//     firstName: String,      // New field
//     lastName: String,       // New field
//     companyName: String,    // New field
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", userSchema);
