import model from "./model.js";

export const createBooking = (booking) => model.create(booking);
export const findAllBookings = () => model.find();
