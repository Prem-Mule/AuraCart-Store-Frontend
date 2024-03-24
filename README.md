# AuraCart Store Backend

This is the backend for AuraCart, an e-commerce website project.

## Features

- Create, update, and delete products.
- RESTful API for seamless integration with the frontend.
- Image upload functionality.
- User authentication using JWT.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Prem-Mule/AuraCart-Store-Backend.git

2. Install dependencies:
   ```bash
    npm install

3. Set up environment variables:
    - Create a .env file in the root directory and add the following variables:
      ```bash
      MONGODB_URL: MongoDB Atlas URI
      secret_token: Secret key for JWT
   
Add your MongoDB Atlas URI as MONGO_URI in the .env file.

## Usage
 - 1 Start the server:

   ```bash
   npm start
    
 ## Access the API:

- **Base URL:** [http://localhost:4000/api/v1/tasks](http://localhost:4000/api/v1/tasks)
- **Endpoints:**
  - GET /: Express app is running.
  - POST /upload: Upload an image.
  - POST /addproduct: Add a new product.
  - POST /removeproduct: Remove a product.
  - GET /allproducts: Get all products.
  - GET /popularproducts: Get popular products.
  - GET /newcollections: Get new collections.
  - POST /signup: Sign up a new user.
  - POST /login: Log in an existing user.
  - POST /addtocart: Add a product to cart.
  - POST /removefromcart: Remove a product from cart.
  - GET /getcart: Get the cart items for a user.


# Dependencies

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [mongoose](https://www.npmjs.com/package/mongoose): Elegant MongoDB object modeling for Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file into `process.env`.
- [nodemon](https://www.npmjs.com/package/nodemon): Utility that monitors for changes in your source code and automatically restarts your server.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): JSON Web Token implementation for Node.js.
- [multer](https://www.npmjs.com/package/multer): Middleware for handling multipart/form-data, used for file uploads.
- [cors](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.
- [path](https://www.npmjs.com/package/path): Utility for working with file and directory paths in Node.js.


# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
