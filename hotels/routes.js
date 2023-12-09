import * as dao from "./dao.js";

function HotelRoutes(app) {
    const findAllHotels = async (req, res) => {
        const hotels = await dao.findAllHotels();
        res.json(hotels);
    };

    const findHotelsByCity = async (req, res) => {
        const hotels = await dao.findHotelsByCity(
            req.params.city);
        if (!hotels) {
            res.json(
                { message: "No hotels in this area" });
        } else {
            res.json(hotels);
        }

    };

    const updateHotel = async (req, res) => {
        const { hotelId } = req.params;
        const status = await dao.updateHotel(hotelId, req.body);
        currentHotel = await dao.findHotelById(hotelId);
        res.json(status);
    };

    const createHotel = async (req, res) => {
        const hotel = await dao.createHotel(req.body);
        res.json(hotel);
    };


    app.post("/api/hotels", createHotel);
    app.get("/api/hotels/:city", findHotelsByCity);
    app.get("/api/hotels", findAllHotels);
    app.put("/api/hotels/:hotelId", updateHotel);
}

export default HotelRoutes;
