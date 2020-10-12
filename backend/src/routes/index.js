const { Router } = require("express");
const adminRoutes = require("./adminRoutes");

const router = Router();

router.use(adminRoutes);

module.exports = router;
