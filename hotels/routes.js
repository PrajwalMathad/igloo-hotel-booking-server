import * as dao from "./dao.js";

function HotelRoutes(app) {
    const findAllHotels = async (req, res) => {
        const hotels = await dao.findAllHotels();
        res.json(hotels);
    };

    const findHotelsByCity = async (req, res) => {
        const hotels = await dao.findHotelsByCity(
            req.params.city);
        if (hotels.length === 0) {
            res.json(
                { message: "No hotels in this area" });
        } else {
            res.json(hotels);
        }

    };

    const findHotelsByOwner = async (req, res) => {
        const hotels = await dao.findHotelsByOwner(
            req.params.owner);
        if (hotels.length === 0) {
            res.json(
                { message: "No hotels owned by you." });
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

    const findHotelById = async (req, res) => {
        const { hotelId } = req.params;
        const hotel = await dao.findHotelById(hotelId);
        res.json(hotel);
    };

    const deleteHotel = async (req, res) => {
        const status = await dao.deleteHotel(req.params.hotelId);
        res.json(status);
    };
    



    app.post("/api/hotels", createHotel);
    app.get("/api/hotels/city/:city", findHotelsByCity);
    app.get("/api/hotels/owner/:owner", findHotelsByOwner);
    app.get("/api/hotels", findAllHotels);
    app.get("/api/hotels/:hotelId", findHotelById);
    app.put("/api/hotels/:hotelId", updateHotel);
    app.delete("/api/hotels/:hotelId", deleteHotel);
}

export default HotelRoutes;
