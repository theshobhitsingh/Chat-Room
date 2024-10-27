// Run this file : Nodemon mongo.js to run the Chat Application
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://127.0.0.1:27017/whatsapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
app.listen(port, () => console.log("App is listening on port", port));

// Define the root route
app.get("/", (req, res) => {
  res.render("index");
});

// Define the chats route
app.get("/chats", async (req, res) => {
  try {
    const chats = await Chat.find();
    res.render("chats", { chats });
  } catch (err) {
    console.error("Error fetching chats:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Handle new chat submission
app.post("/add-chat", async (req, res) => {
  const { from, to, msg } = req.body;
  const chat = new Chat({
    from,
    to,
    msg,
    created_at: new Date(),
  });

  try {
    await chat.save();
    res.redirect("/chats");
  } catch (err) {
    console.error("Error saving chat:", err);
    res.status(500).send("Error saving chat");
  }
});

// Edit chat route (GET)
app.get("/edit-chat/:id", async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    res.render("edit-chat", { chat });
  } catch (err) {
    console.error("Error fetching chat:", err);
    res.status(500).send("Error fetching chat");
  }
});

// Update chat route (POST)
app.post("/edit-chat/:id", async (req, res) => {
  const { from, to, msg } = req.body;
  try {
    await Chat.findByIdAndUpdate(req.params.id, { from, to, msg });
    res.redirect("/chats");
  } catch (err) {
    console.error("Error updating chat:", err);
    res.status(500).send("Error updating chat");
  }
});

// Delete chat route
app.post("/delete-chat/:id", async (req, res) => {
  try {
    await Chat.findByIdAndDelete(req.params.id);
    res.redirect("/chats");
  } catch (err) {
    console.error("Error deleting chat:", err);
    res.status(500).send("Error deleting chat");
  }
});
