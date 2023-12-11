import * as dao from "./dao.js";

function BookingRoutes(app) {
    const findAllBookings = async (req, res) => {
        try {
            const bookings = await dao.findAllBookings();
            res.json(bookings);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };

    const createBooking = async (req, res) => {
        try {
            const booking = await dao.createBooking(req.body);
            res.json(booking);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };

    const findBookingsByUser = async (req, res) => {
        try {
            const bookings = await dao.findBookingsByUser(
                req.params.user);
            if (bookings.length === 0) {
                res.json(
                    { message: "No bookings done by you." });
            } else {
                res.json(bookings);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }


    };

    const findBookingsByHotel = async (req, res) => {
        try {
            const bookings = await dao.findBookingsByHotel(
                req.params.hotelId);
            if (bookings.length === 0) {
                res.json(
                    { message: "No bookings done by you." });
            } else {
                res.json(bookings);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }


    };

    const getCurrentBookingsByHotel = async (req, res) => {
        try {
            const bookings = await dao.getCurrentBookingsByHotel(
                req.query.hotel, req.query.check_in_date, req.query.check_out_date);
            if (bookings.length === 0) {
                res.json(
                    { booked_rooms: 0 });
            } else {
                res.json(bookings);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }


    };

    const deleteBooking = async (req, res) => {
        try {
            const status = await dao.deleteBooking(req.params.bookingId);
            res.json(status);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };



    app.get("/api/bookings", findAllBookings);
    app.get("/api/bookings/user/:user", findBookingsByUser);
    app.get("/api/bookings/hotel/:hotelId", findBookingsByHotel);
    app.get("/api/bookings/status", getCurrentBookingsByHotel);
    app.delete("/api/bookings/:bookingId", deleteBooking);

    app.post("/api/bookings", createBooking);

}

export default BookingRoutes;