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

router.get('/Monday', getDataMonday)

router.get('/Tuesday', getDataTuesday)

router.get('/Wendnesday', getDataWednesday)
router.get('/Thursday',getDataThursday)
router.get('/Friday',getDataFriday)
router.get('/Saturday', getDataSaturday)
router.get('/Sunday', getDataSunday)

module.exports = {
    router
}