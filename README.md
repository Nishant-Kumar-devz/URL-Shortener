
# URL Shortener

**URL Shortener** is a Node.js application that allows users to shorten long URLs into more manageable and shareable links. It leverages MongoDB for data storage and provides a simple API for generating and managing short URLs.

## Features

- **Generate Short URLs**: Convert long URLs into shortened versions.
- **Redirect Short URLs**: Redirect users to the original URL when they visit a shortened link.
- **View Shortened Links**: Retrieve a list of all shortened URLs and their corresponding original URLs.

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript code server-side.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing URL mappings.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Module for loading environment variables from a `.env` file.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) installed and running locally or a MongoDB Atlas account

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/URL-Shortener.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd URL-Shortener
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**

   Create a `.env` file in the root directory of the project with the following content:

   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/short-url
   ```

   Replace the `MONGO_URI` value with your MongoDB connection string if using a different setup or MongoDB Atlas.

5. **Start the Application**

   ```bash
   npm start
   ```

   The server will start and listen on port 4001.

## Usage

- **Generate Short URL**: Send a POST request to `/url` with the original URL in the request body.
- **Redirect Short URL**: Access a shortened URL, and it will redirect to the original URL.

## API Endpoints

- `POST /url`: Create a new short URL.
  - Request body: `{ "originalUrl": "https://example.com" }`
  - Response: `{ "shortUrl": "http://localhost:4001/abc123" }`

- `GET /url/:shortId`: Redirect to the original URL based on the short URL identifier.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to help improve the project.

---
