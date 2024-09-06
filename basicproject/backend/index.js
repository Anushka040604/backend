import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'
const app = express();
dotenv.config()
const jokes = [
  { id: 1, title: 'A joke', content: 'This is a joke' },
  { id: 2, title: 'Second joke', content: 'This is a joke' },
  { id: 3, title: 'Third joke', content: 'This is a joke' },
];

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

const port = process.env.PORT||5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
