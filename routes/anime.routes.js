const { Router } = require('express');
const { 
    getDataMonday,
    getDataTuesday,
    getDataWednesday,
    getDataThursday,
    getDataFriday,
    getDataSaturday,
    getDataSunday, } = require('../controllers/animes.controller');
const router = Router();

router.get('/monday', getDataMonday)

router.get('/tuesday', getDataTuesday)

router.get('/wendnesday', getDataWednesday)
router.get('/thursday',getDataThursday)
router.get('/friday',getDataFriday)
router.get('/saturday', getDataSaturday)
router.get('/sunday', getDataSunday)

module.exports = {
    router
}