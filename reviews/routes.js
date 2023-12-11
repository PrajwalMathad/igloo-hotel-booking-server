import * as dao from "./dao.js";

function ReviewRoutes(app) {
    const createReview = async (req, res) => {
        try {
            const review = await dao.createReview(req.body);
            res.json(review);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };

    const deleteReview = async (req, res) => {
        try {
            const status = await dao.deleteReview(req.params.reviewId);
            res.json(status);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };

    const findReviewsByUser = async (req, res) => {
        try {
            const reviews = await dao.findReviewsByUser(
                req.params.user);
            if (reviews.length === 0) {
                res.json(
                    { message: "No reviews from this user." });
            } else {
                res.json(reviews);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };

    const findReviewsByHotel = async (req, res) => {
        try {
            const reviews = await dao.findReviewsByHotel(
                req.params.hotel);
            if (reviews.length === 0) {
                res.json(
                    { message: "No reviews for this hotel." });
            } else {
                res.json(reviews);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };

    const getAvgHotelRating = async (req, res) => {
        try {
            const rating = await dao.getAvgHotelRating(req.params.hotel);
            if (rating.length === 0) {
                res.json(
                    { message: "No reviews for this hotel." });
            } else {
                res.json(rating);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };

    const updateReview = async (req, res) => {
        try {
            const { reviewId } = req.params;
            const status = await dao.updateReview(reviewId, req.body);
            res.json(status);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };

    app.post("/api/reviews", createReview);
    app.get("/api/reviews/user/:user", findReviewsByUser);
    app.get("/api/reviews/hotel/:hotel", findReviewsByHotel);
    app.get("/api/reviews/rating/:hotel", getAvgHotelRating);
    app.delete("/api/reviews/:reviewId", deleteReview);
    app.put("/api/reviews/:reviewId", updateReview);
}

export default ReviewRoutes;