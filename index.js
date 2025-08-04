const express = require("express");
const app = express();
const PORT = 3000;

const jokes = [
  {
    joke: `Abed asked his mother: Mazbout enno aneh asleh ered?\n\ El Abed: Ma ba3ref, le2anneh mesh sheyfeh ahel bayak wala marra. (I don't know, son, I never met your father's parents.)`
  },
  {
    joke: `Abu El Abed answers the telephone, and it's an Emergency Room doctor.\n\nDoctor: "Your wife was in a serious car accident, and I have bad news and good news. The bad news is she has lost all use of both arms and both legs, and will need help eating and going to the bathroom for the rest of her life."\n\nAbu El Abed: "My God. What's the good news?"\n\nDoctor: I'm kidding. She's dead.`
  }
];

app.get("/api/joke", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});

app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Abu El Abed Joke API. Try /api/joke for a random joke.");
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
