import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["owner", "user", "admin"],
    default: "user"
  },
  favourite_hotels: [{
    type: String
  }]
},
  { collection: "users" });
export default userSchema;

