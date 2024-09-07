# URL-Shortener
A simple URL shortener built with Node.js and Express. Shorten, track, and manage URLs with ease.
---

# URL Shortener

A simple and efficient URL shortener built with Node.js and Express. This project allows users to shorten long URLs into shorter, more manageable links. It’s perfect for integrating with applications or services where URL length is a concern or for tracking URL analytics.

## Features

- **Shorten URLs**: Convert long URLs into short, easily shareable links.
- **Analytics**: Track the number of clicks on shortened URLs.
- **RESTful API**: Provides a RESTful API for integrating with other services.
- **Easy Setup**: Simple to set up and deploy with minimal configuration.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Nishant-Kumar-devz/URL-Shortener.git
   ```

2. Navigate to the project directory:

   ```bash
   cd url-shortener
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. The application will be available at `http://localhost:4001` (or your configured port).

## API Endpoints

- **POST `/url`**: Shorten a new URL.
- **GET `/url/:shorturl`**: Redirect to the original URL based on the short alias.
- **GET `/url/analytics/:shorturl`**: Retrieve analytics for a specific shortened URL.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major changes, open an issue to discuss what you’d like to change.

## Contact

For questions or support, please open an issue or contact me at nishantkumardevz@gmail.com.
