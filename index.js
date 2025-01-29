const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Lunch and Learn Endpoints
app.get("/lunch-and-learn", (req, res) => {
  res.send(lunchData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const lunchData = [
  { food: "Pizza", score: 8 },
  { food: "Salad", score: 7 },
  { food: "Burger", score: 9 },
  { food: "Sandwich", score: 6 },
  { food: "Sushi", score: 10 },
];
