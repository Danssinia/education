const { register } = require("../controller/user");

const router = require("express").Router();
router.post("/create", register);

module.exports = router;
