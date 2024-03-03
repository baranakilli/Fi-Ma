/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const fetch = require("node-fetch");

exports.getTrendyolProducts = onRequest((request, response) => {
  const url =
    "https://api.trendyol.com/sapigw/suppliers/645403/products?onSale=true&size=9999";

  fetch(url, {
    "method": "get",
    "headers": {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": "Basic " + process.env.REACT_APP_API_TOKEN,
      "User-Agent": "645403 - SelfIntegration",
    }})
      .then((res) => res.json())
      .then((data) => {
        response.json(data);
      })
      .catch((err) => {
        console.error(err);
        response.status(500).send("Error");
      });
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
