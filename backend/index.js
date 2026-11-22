import express from "express"
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})
// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
    const jokes = [
    //    array of objectwith id title and short description
    { id: 1, title: "Why don't scientists trust atoms?", description: "Because they make up everything!" },
    { id: 2, title: "What do you call a fake noodle?", description: "An impasta!" },
    { id: 3, title: "Why did the scarecrow win an award?", description: "Because he was outstanding in his field!" },
    { id: 4, title: "How does a penguin build its house?", description: "Igloos it together!" },
    { id: 5, title: "Why don't skeletons fight each other?", description: "They don't have the guts!" }
    ];
    res.json(jokes);
});


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})