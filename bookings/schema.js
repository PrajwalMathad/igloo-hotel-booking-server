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
  CheckInDate: {
    type: Date,
    required: true
  },
  CheckOutDate: {
    type: Date,
    required: true
  },
  Price: {
    type: Number,
    required: true
  }
}, { collection: 'bookings' });

export default bookingSchema;
