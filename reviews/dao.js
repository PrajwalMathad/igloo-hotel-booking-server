import model from "./model.js";

export const createReview = (review) => model.create(review);

export const findReviewsByUser = (user) =>
    model.find({ "user": user });

export const findReviewsByHotel = (hotel) =>
    model.find({ "hotel": hotel });

export const updateReview = (reviewId, review) =>
    model.updateOne({ _id: reviewId }, { $set: review });


export const getAvgHotelRating = (hotel) =>
    model.aggregate([
        {
            $match: {
                "hotel": hotel
            }
        },
        {
            $group: {
                _id: "$hotel", // Grouping by hotel ID
                avg_rating: { $avg: "$rating" } // Calculating the average rating
            }
        }
    ]);



export const deleteReview = (reviewId) => model.deleteOne({ _id: reviewId });    