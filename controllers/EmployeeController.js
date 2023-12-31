const employeeService = require("../services/EmployeeService");

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.json({ data: employees, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const employees = await employeeService.createEmployee(req.body);
    res.json({ data: employees, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employees = await employeeService.getEmployeeById(req.params.id);
    res.json({ data: employees, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employees = await employeeService.updateEmployee(req.params.id, req.body);
    res.json({ data: employees, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employees = await employeeService.deleteEmployee(req.params.id);
    res.json({ data: employees, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
