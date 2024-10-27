const mongoose = require("mongoose");
const Chat = require("./models/chat");

mongoose
  .connect("mongodb://127.0.0.1:27017/whatsapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

const chats = [
  {
    from: "Shobhit",
    to: "Singh",
    msg: "Hey Bro! Let's Code",
    created_at: new Date(),
  },
  {
    from: "Alice",
    to: "Bob",
    msg: "How's it going?",
    created_at: new Date(),
  },
  {
    from: "John",
    to: "Doe",
    msg: "What's up?",
    created_at: new Date(),
  },
];

Chat.insertMany(chats)
  .then((res) => console.log("Chats saved:", res))
  .catch((err) => console.error("Error saving chats:", err));
