const express = require("express");
const router = express.Router();
const { getAllRecepies, getrecepie ,addRecepie } = require("../controller/recipiesController");

router.use ("/getAll",getAllRecepies)
router.use ("/getrecepie/:id",getrecepie)
router.use ("/addRecepie",addRecepie)


module.exports = router;
