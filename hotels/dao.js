import model from "./model.js";

export const createHotel = (hotel) => {
    const currentTime = new Date().getTime();
    hotel.hotel_id = 'H' + currentTime;
    model.create(hotel);
}
export const findAllHotels = () => model.find();

export const findHotelsByCity = (city) =>{
    const caseInsensitiveCity = new RegExp(`^${city}$`, 'i');
    return model.find({ "location.city": caseInsensitiveCity });
}
    

export const findHotelsByOwner = (owner) =>
    model.find({ "owner": owner });

export const findHotelById = (hotelId) => model.find({ "hotel_id": hotelId });

export const updateHotel = (hotelId, hotel) =>
    model.updateOne({ hotel_id: hotelId }, { $set: hotel });

export const deleteHotel = (hotelId) =>
    model.deleteOne({ "hotel_id": hotelId });



