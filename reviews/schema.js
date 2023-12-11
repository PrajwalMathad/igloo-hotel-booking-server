import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  hotel: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String
  },
  date: {
    type: String,
    required: true
  },
  liked_by:[{
    type: String
  }]
}, { collection: 'reviews' });

export default reviewSchema;
