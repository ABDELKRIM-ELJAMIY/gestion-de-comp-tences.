const express = require('express')
const { creeCompetance, getAllCompetances, getcompetanceById, updateCompetance, deleteCompetance } = require('../controllers/competenceController')

const router = express.Router();


router.post('/creeCompetance', creeCompetance)
router.get('/getAllCompetances', getAllCompetances)
router.get('/getcompetanceById/:id', getcompetanceById)
router.put('/updateCompetance/:id', updateCompetance)
router.delete('/deleteCompetance/:id', deleteCompetance)
module.exports = router;