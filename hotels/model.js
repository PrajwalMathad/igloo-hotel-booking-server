import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("hotel", schema);
export default model;