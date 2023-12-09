import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("bookings", schema);
export default model;