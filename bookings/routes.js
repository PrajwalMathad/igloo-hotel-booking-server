import * as dao from "./dao.js";

function BookingRoutes(app) {
    const findAllBookings = async (req, res) => {
        const bookings = await dao.findAllBookings();
        res.json(bookings);
    };
    app.get("/api/bookings", findAllBookings);
}

export default BookingRoutes;