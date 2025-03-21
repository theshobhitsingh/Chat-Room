# Chat-Room

A simple Chat Application built with **Express** and **MongoDB**. This application allows users to send and manage chat messages in a user-friendly interface.

## Home Page
<img src = "https://github.com/theshobhitsingh/Chat-Room/blob/main/ChatRoom%20Images/Home%20Page.png?raw=true" >

## All Chats Section
<img src = "https://github.com/theshobhitsingh/Chat-Room/blob/main/ChatRoom%20Images/All%20Chats.png?raw=true" >

## Edit Chat Option
<img src = "https://github.com/theshobhitsingh/Chat-Room/blob/main/ChatRoom%20Images/Edit%20Chat.png?raw=true" >

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- User-friendly interface for viewing and managing chats.
- Create, Edit, and Delete chat messages.
- Responsive design for mobile and desktop users.

## Technologies Used

- **Node.js** - JavaScript runtime for building the server.
- **Express** - Web application framework for Node.js.
- **MongoDB** - NoSQL database for storing chat messages.
- **EJS** - Templating engine for rendering HTML views.
- **CSS** - Styling the application for a modern look.

## Installation

To get started with the chat application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-room.git
   
2. Navigate to the project directory:

   ```bash
   cd chat-application
   
3. Install the required dependencies:

   ```bash
   npm install
   
4. Set up your MongoDB database. You can use a local MongoDB server or a cloud-based service like MongoDB Atlas.

5. Create a .env file in the root of the project with the following variables:

(I) makefile
(II) PORT=3000
(III) MONGODB_URI=your_mongodb_connection_string
(IV) Start the application: npm install

6. Open your browser and go to http://localhost:8080.

## Usage

- **Viewing Chats**: Navigate to the "/chats" route to see all chat messages.
- **Adding a Chat**: Use the form on the home page to send a new chat message.
- **Editing a Chat**: Click on "Edit" next to a chat message to update it.
- **Deleting a Chat**: Click the "Delete" button next to a chat message to remove it.

## API Endpoints

### Chats

- **GET /chats**
  - Retrieve all chat messages.

- **POST /add-chat**
  - Create a new chat message.
  - **Body**:
    - `from`: Sender's name.
    - `to`: Recipient's name.
    - `msg`: Message content.

- **POST /edit-chat/:id**
  - Update an existing chat message.
  - **Parameters**:
    - `id`: The ID of the chat message to update.
  - **Body**: Same as create.

- **POST /delete-chat/:id**
  - Delete a chat message.
  - **Parameters**:
    - `id`: The ID of the chat message to delete.

## Contributing

Contributions are welcome! To contribute to this project, please fork the repository and submit a pull request with your changes.

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/YourFeature
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
5. Open a pull request.

## Developer
Developer of this project : *Shobhit Singh*
