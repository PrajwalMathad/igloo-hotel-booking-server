import model from "./model.js";

export const createBooking = (booking) => model.create(booking);
export const findAllBookings = () => model.find();

export const findBookingsByUser = (user) =>
    model.find({ "user": user });

export const findBookingsByHotel = (hotelId) =>
    model.find({ "hotel": hotelId });

export const getCurrentBookingsByHotel = (hotelId, check_in_date, check_out_date) =>
    model.aggregate([
        {
            $match: {
                hotel: hotelId,
                $or: [
                    //checks for bookings where the check_in_date is on or before checkout and the check_out_date is on or after checkin.
                    {
                        check_in_date: {
                            $lte: check_out_date
                        },
                        check_out_date: {
                            $gte: check_in_date
                        }
                    }

                ]
            }
        },
        {
            $group: {
                _id: null, // Grouping by null means grouping all documents together
                booked_rooms: { $sum: "$rooms" }
            }
        }
    ]);

export const deleteBooking = (bookingId) => model.deleteOne({ _id: bookingId });