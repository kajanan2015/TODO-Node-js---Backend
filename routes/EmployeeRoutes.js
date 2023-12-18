const express = require("express");
const {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/EmployeeController");

const router = express.Router();

router.route("/").get(getAllEmployees).post(createEmployee);
router.route("/:id").get(getEmployeeById).put(updateEmployee).delete(deleteEmployee);

module.exports = router;
