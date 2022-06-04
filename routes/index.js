const router = require("express").Router();
const apiRoutes = require("./api");
const clientRoutes = require("./client");

router.use("/api", apiRoutes);
router.use("/", clientRoutes);

module.exports = router;
