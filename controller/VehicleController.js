const Vehicle = require('../models/Vehicle')

class VehicleController {
    static async create(req,res){
        const { brand, model, year } = req.body;
        if (!brand || !model || !year)
            return res.status(400).send({ message: "Dados do veículo inválidos" })
        const vehicle = {
            brand: brand,
            model: model,
            year: year
        }
        try {
            const p = await Vehicle.create(vehicle);
            return res.status(201).send({ message: "Pessoa inserida com sucesso", body: p });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async getAllVehicles(req, res) {
        try {
            const vehicle = await Vehicle.find();
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    };

    static async getById(req, res) {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provider" })
        try {
            const vehicle = await Vehicle.findById(id);
            return res.status(200).json(vehicle);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    };

    static async deleteById(req, res) {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provider" });
        try {
            await Vehicle.findByIdAndRemove(id);
            return res.status(200).send({ message: "Vehicle deleted successfully" })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failled" })
        }
    }

    // static async updateById(req, res) {
    //     const { id } = req.params;
    //     if (!id)
    //         return res.status(400).send({ message: "No id provider" })
    //     const vehicle = req.body;
    //     try {
    //         const newVehicle = await Vehicle.findByIdAndUpdate(
    //             id,
    //             { salary: person.salary }
    //         );
    //         return res.status(200).send(newPerson);
    //     } catch (error) {
    //         return res.status(500).send({ error: error });
    //     }
    // };
}



module.exports = VehicleController