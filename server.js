const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = 'your-mongodb-uri'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Define a mongoose schema and model for your employee data
const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  // Add other fields as needed
});

const Employee = mongoose.model('Employee', employeeSchema);

// Your API endpoints go here
app.post('/api/saveEmployee', async (req, res) => {
  const employeeDetails = req.body;

  try {
    // Create a new Employee instance
    const newEmployee = new Employee(employeeDetails);

    // Save the employee to the database
    await newEmployee.save();

    console.log('Employee details saved successfully:', employeeDetails);
    res.status(200).json({ message: 'Employee details saved successfully' });
  } catch (error) {
    console.error('Error saving employee details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
