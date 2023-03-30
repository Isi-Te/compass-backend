const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8081

const cors = require("cors");
const { CORS_ORIGIN } = process.env;

app.use(express.json())
app.use(express.static('public'))

app.use(cors({ origin: CORS_ORIGIN }));

app.listen(PORT, () => {
    console.log("🚀 Listening on port 8080")
})