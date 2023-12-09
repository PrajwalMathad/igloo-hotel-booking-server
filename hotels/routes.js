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

    app.get("/api/hotels/:city", findHotelsByCity);
    app.get("/api/hotels", findAllHotels);
}

export default HotelRoutes;
