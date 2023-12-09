import * as dao from "./dao.js";

function BookingRoutes(app) {
    const findAllBookings = async (req, res) => {
        const bookings = await dao.findAllBookings();
        res.json(bookings);
    };

    const createBooking = async (req, res) => {
        const booking = await dao.createBooking(req.body);
        res.json(booking);
    };

    const findBookingsByUser = async (req, res) => {
        const bookings = await dao.findBookingsByUser(
            req.params.user);
        if (bookings.length === 0) {
            res.json(
                { message: "No bookings done by you." });
        } else {
            res.json(bookings);
        }

    };

    const findBookingsByHotel = async (req, res) => {
        const bookings = await dao.findBookingsByHotel(
            req.params.hotelId);
        if (bookings.length === 0) {
            res.json(
                { message: "No bookings done by you." });
        } else {
            res.json(bookings);
        }

    };

    const getCurrentBookingsByHotel = async (req, res) => {
        const bookings = await dao.getCurrentBookingsByHotel(
            req.body.hotel, req.body.check_in_date, req.body.check_out_date);
        if (bookings.length === 0) {
            res.json(
                { booked_rooms: 0 });
        } else {
            res.json(bookings);
        }

    };

    const deleteBooking = async (req, res) => {
        const status = await dao.deleteBooking(req.params.bookingId);
        res.json(status);
      };



    app.get("/api/bookings", findAllBookings);
    app.get("/api/bookings/user/:user", findBookingsByUser);
    app.get("/api/bookings/hotel/:hotelId", findBookingsByHotel);
    app.get("/api/bookings/status", getCurrentBookingsByHotel);
    app.delete("/api/bookings/:bookingId", deleteBooking);
    
    app.post("/api/bookings", createBooking);
    
}

export default BookingRoutes;