import model from "./model.js";

export const createHotel = (hotel) => model.create(hotel);
export const findAllHotels = () => model.find();

export const findHotelsByCity = (city) =>
    model.find({ "location.city": city });


export const findHotelsByOwner = (owner) =>
    model.find({ "owner": owner });

export const findHotelById = (hotelId) => model.find({ "hotel_id": hotelId });

export const updateHotel = (hotelId, hotel) =>
    model.updateOne({ hotel_id: hotelId }, { $set: hotel });

export const deleteHotel = (hotelId) =>
    model.deleteOne({ "hotel_id": hotelId });



