const { Router } = require("express");
const { seedDatabase } = require("../services/adminServices");

const router = Router();

router.get("/admin/seedDB", seedDatabase);

module.exports = router;
