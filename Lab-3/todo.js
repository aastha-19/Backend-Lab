import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());
let items = [
    { id: 1, name: 'Reading', completed: false },
    { id: 2, name: 'Shopping', completed: true }
];
let nextId = 3;

// GET
app.get('/items', (req, res) => {
    res.json(items);
});

// POST 
app.post("/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json(item);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:3000`);
});