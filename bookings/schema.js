import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  hotel: {
    type: String,
    required: true
  },
  check_in_date: {
    type: String,
    required: true
  },
  check_out_date: {
    type: String,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { collection: 'bookings' });

export default bookingSchema;
