import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  hotel_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  description: {
    type: String,
    required: true
  },
  amenities: [{
    type: String
  }],
  price: {
    type: Number,
    required: true
  },
  total_rooms: {
    type: Number,
    required: true
  },
  owner: {
    type: String,
    required: true
  }
}, { collection: 'hotels' });

export default hotelSchema;
