import * as dao from "./dao.js";

function HotelRoutes(app) {

    const root = async (req, res) => {
      res.send('Welcome to Igloo!')
    }

    const findAllHotels = async (req, res) => {
        try {
            const hotels = await dao.findAllHotels();
            res.json(hotels);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };

    const findHotelsByCity = async (req, res) => {
        try {
            const hotels = await dao.findHotelsByCity(
                req.params.city);
            if (hotels.length === 0) {
                res.json(
                    { message: "No hotels in this area" });
            } else {
                res.json(hotels);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    const findHotelsByOwner = async (req, res) => {
        try {
            const hotels = await dao.findHotelsByOwner(
                req.params.owner);
            if (hotels.length === 0) {
                res.json(
                    { message: "No hotels owned by you." });
            } else {
                res.json(hotels);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    const updateHotel = async (req, res) => {
        try {
            const { hotelId } = req.params;
            const status = await dao.updateHotel(hotelId, req.body);
            // currentHotel = await dao.findHotelById(hotelId);
            res.json(status);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };

    const createHotel = async (req, res) => {
        try {
            const hotel = await dao.createHotel(req.body);
            res.json(hotel);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };

    const findHotelById = async (req, res) => {
        try {
            const { hotelId } = req.params;
            const hotel = await dao.findHotelById(hotelId);
            res.json(hotel);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    };

    const deleteHotel = async (req, res) => {
        try {
            const status = await dao.deleteHotel(req.params.hotelId);
            res.json(status);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };



    app.get("/api", root)
    app.post("/api/hotels", createHotel);
    app.get("/api/hotels/city/:city", findHotelsByCity);
    app.get("/api/hotels/owner/:owner", findHotelsByOwner);
    app.get("/api/hotels", findAllHotels);
    app.get("/api/hotels/:hotelId", findHotelById);
    app.put("/api/hotels/:hotelId", updateHotel);
    app.delete("/api/hotels/:hotelId", deleteHotel);
}

export default HotelRoutes;
