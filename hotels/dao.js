import model from "./model.js";
export const createHotel = (hotel) => model.create(hotel);
export const findAllHotels = () => model.find();
export const findHotelsByCity = (city) =>
    model.find({ "location.city": city });
