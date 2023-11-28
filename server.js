const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Your API endpoints go here
app.post('/api/saveEmployee', (req, res) => {
  const employeeDetails = req.body;
  // You can handle saving the employee details to a database or perform any other necessary actions.
  console.log('Received employee details:', employeeDetails);
  res.status(200).json({ message: 'Employee details saved successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
