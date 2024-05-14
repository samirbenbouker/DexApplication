**CryptoCurrency Converter**

![CryptoCurrency Converter](https://yourprojectimage.com)

---

### Overview

This project is a cryptocurrency converter that allows users to exchange cryptocurrencies using Moralis library. It consists of a backend (BE) with an endpoint that facilitates currency conversion between two addresses and a frontend (FE) built with React for user interaction.

---

### Features

- **Cryptocurrency Conversion:** Users can convert cryptocurrencies between two addresses.
- **Real-Time Updates:** Real-time updates of cryptocurrency exchange rates.
- **Responsive Design:** The frontend is designed to be responsive and accessible across various devices.

---

### Technologies Used

- **Backend (BE):**
  - Moralis: A platform providing blockchain-based solutions.
  - Node.js: A JavaScript runtime for building server-side applications.
  - Express: A web application framework for Node.js.
  - MongoDB: A NoSQL database for storing cryptocurrency exchange data.

- **Frontend (FE):**
  - React: A JavaScript library for building user interfaces.
  - Axios: A promise-based HTTP client for making requests to the backend.
  - Bootstrap: A front-end framework for designing responsive and mobile-first websites.

---

### How to Run

1. **Backend (BE):**
   - Clone the repository.
   - Navigate to the `backend` directory.
   - Install dependencies using `npm install`.
   - Start the server using `npm start`.

2. **Frontend (FE):**
   - Navigate to the `frontend` directory.
   - Install dependencies using `npm install`.
   - Start the development server using `npm start`.

3. **Accessing the Application:**
   - Open your web browser and navigate to `http://localhost:3000` to access the frontend.

---

# Cryptocurrency Conversion Project

This project facilitates the conversion of cryptocurrencies, featuring a backend (BE) with an endpoint that performs currency conversion using the Moralis library. The frontend (FE) is built with React.

## Backend (BE)

### Endpoint Description

The `/tokenPrice` endpoint retrieves price information for two tokens specified by their addresses. Here's how it works:

1. **Request Handling:**
   - Receives a GET request with parameters in the query string.
   - Parses the query parameters.

2. **Fetching Token Prices:**
   - Uses the Moralis `EvmApi` object to fetch the price information of two tokens.
   - Makes two asynchronous calls to `getTokenPrice` method for each token address specified in the query parameters.
   - Stores the responses containing token price information.

3. **Processing Price Data:**
   - Extracts the USD prices of the two tokens from the response objects.
   - Calculates the price ratio between the two tokens.

4. **Response Generation:**
   - Assembles the price information into a JSON object.
   - Responds with a status code of 200 (OK) along with the JSON object.

## Frontend (FE)

The frontend is developed using React to provide a user-friendly interface for interacting with the currency conversion functionality.

## Usage

To use the project:
1. Set up the backend environment with the specified endpoint.
2. Run the React frontend to access the conversion functionality.

### Usage

1. **Select Cryptocurrencies:** Choose the cryptocurrencies you want to exchange.
2. **Enter Amount:** Enter the amount of cryptocurrency you want to exchange.
3. **Confirm Transaction:** Review the transaction details and confirm the exchange.
4. **Transaction Status:** View the status of your transaction and receive real-time updates.
