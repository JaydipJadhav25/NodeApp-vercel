import express from "express"
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});

app.get("/name/:name", (req, res) => {
    const name = req.params.name; // Correctly extracting the route parameter
    res.send(`Hello, ${name}!`);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
