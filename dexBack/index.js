const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/tokenPrice", async (req, res) => {
    const { query } = req

    const resOne = await Moralis.EvmApi.token.getTokenPrice({
        address: query.addressOne
    })

    const resTwo = await Moralis.EvmApi.token.getTokenPrice({
        address: query.addressTwo
    })

    const usdPrices = {
        tokenOne: resOne.raw.usdPrice,
        tokenTwo: resTwo.raw.usdPrice,
        ratio: resOne.raw.usdPrice / resTwo.raw.usdPrice
    }

    return res.status(200).json(usdPrices);
});

Moralis.start({
    apiKey: process.env.MORALIS_KEY,
}).then(() => {
    app.listen(port, () => {
        console.log(`Listening for API Calls`);
    });
});