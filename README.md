# Connectify

Connectify is a video call application that allows users to connect and communicate through video conferencing. The platform is built using a Node.js backend and a React frontend, utilizing real-time communication features powered by Socket.io.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- Real-time video and audio communication
- User authentication and management
- Easy-to-use interface

## Technologies Used

### Backend

- Node.js
- Express
- MongoDB (with Mongoose)
- Socket.io
- bcrypt for password hashing
- dotenv for environment variables
- cors for handling cross-origin requests

### Frontend

- React
- Material-UI for responsive design
- Axios for API calls
- Socket.io-client for real-time communication

## Installation

To get started with Connectify, clone the repository and install the necessary dependencies.

### Clone the repository

```bash
git clone https://github.com/alfiyainamdar31/connectify.git
cd connectify
```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
    ```bash
   npm install
   ```
3. Create a ```.env``` file in the backend directory to store environment variables. Add your MongoDB connection string and any other necessary variables.
4. Start the backend server:
    ```bash
   node src/app.js
   ```
### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
    ```bash
   npm install
   ```
3. Start the frontend development server:
    ```bash
   npm start
   ```
## Usage
Once both the backend and frontend servers are running, open your browser and navigate to ```http://localhost:3000``` to access the application.

## Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/your-feature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push to the branch (git push origin feature/your-feature)
5. Create a new Pull Request

## Environment Variables

This project uses a `.env` file to manage environment variables. Make sure to create a `.env` file in the backend directory of your project with the following variables:

```plaintext
MONGO_URI=your-mongo-uri
PORT=your-port
```

## License
This project is licensed under the ISC License.


Feel free to customize any sections, especially the installation instructions and features, to better fit your project's specifics!
