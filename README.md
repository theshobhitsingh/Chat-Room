# Chat-Room

A simple chat application built with **Express** and **MongoDB**. This application allows users to send and manage chat messages in a user-friendly interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User-friendly interface for viewing and managing chats.
- Create, edit, and delete chat messages.
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
   git clone https://github.com/yourusername/chat-application.git
Navigate to the project directory:

bash
Copy code
cd chat-application
Install the required dependencies:

bash
Copy code
npm install
Set up your MongoDB database. You can use a local MongoDB server or a cloud-based service like MongoDB Atlas.

Create a .env file in the root of the project with the following variables:

makefile
Copy code
PORT=3000
MONGODB_URI=your_mongodb_connection_string
Start the application:

bash
Copy code
npm start
Open your browser and go to http://localhost:8080.
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

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeature









#ePramaan@1
