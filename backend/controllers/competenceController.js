const Competance = require('../models/competenceModel');
const { param } = require('../routes/competenceRoutes');
const creeCompetance = async (req, res) => {
    try {
        const { nom } = req.body;
        const existingComp = await Competance.findOne({ nom });
        if (existingComp) {
            return res.status(400).json({ message: "competanse exist " });
        }

        const competance = new Competance(req.body);
        await competance.save();
        res.status(201).json({
            success: true,
            message: 'competance cree avec seccus ',
            competance
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'la competance nes pa cree ',
            error: error.message
        });
    }
}

const getAllCompetances = async (req, res) => {
    try {
        const competances = await Competance.find();
        res.status(200).json(competances)
    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: "no competances found "
            }
        )

    }
}
const getcompetanceById = async (req, res) => {
    try {
        const competanceId = req.params.id;
        const competance = await Competance.findById(competanceId);
        if (!competance) {
            return res.status(404).json({ message: 'competance not found' });
        }
        res.status(200).json(competance);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
module.exports = { creeCompetance, getAllCompetances, getcompetanceById };