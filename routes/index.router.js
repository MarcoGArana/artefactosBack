const express = require("express");
const router = express.Router();

const movementRouter = require("./movimiento.router");
const foodRouter = require("./comida.router");

router.use("/comida", foodRouter);
router.use("/movimiento", movementRouter);

module.exports = router;