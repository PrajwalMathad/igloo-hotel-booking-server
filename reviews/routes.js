import * as dao from "./dao.js";

function ReviewRoutes(app) {
    const createReview = async (req, res) => {
        const review = await dao.createReview(req.body);
        res.json(review);
      };
    
      const deleteReview = async (req, res) => {
        const status = await dao.deleteReview(req.params.reviewId);
        res.json(status);
      };

      const findReviewsByUser = async (req, res) => {
        const reviews = await dao.findReviewsByUser(
            req.params.user);
        if (reviews.length === 0) {
            res.json(
                { message: "No reviews from this user." });
        } else {
            res.json(reviews);
        }
    };

    const findReviewsByHotel = async (req, res) => {
        const reviews = await dao.findReviewsByHotel(
            req.params.hotel);
        if (reviews.length === 0) {
            res.json(
                { message: "No reviews for this hotel." });
        } else {
            res.json(reviews);
        }
    };

    const getAvgHotelRating = async(req, res) => {
        const rating = await dao.getAvgHotelRating(req.params.hotel);
        if (rating.length === 0) {
            res.json(
                { message: "No reviews for this hotel." });
        } else {
            res.json(rating);
        }
    };

    const updateReview = async (req, res) => {
        const { reviewId } = req.params;
        const status = await dao.updateReview(reviewId, req.body);
        res.json(status);
      };

    app.post("/api/reviews", createReview);
    app.get("/api/reviews/user/:user", findReviewsByUser);
    app.get("/api/reviews/hotel/:hotel", findReviewsByHotel);
    app.get("/api/reviews/rating/:hotel", getAvgHotelRating);
    app.delete("/api/reviews/:reviewId", deleteReview);
    app.put("/api/reviews/:reviewId", updateReview);
}

export default ReviewRoutes;