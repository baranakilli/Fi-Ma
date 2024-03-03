const {onRequest} = require("firebase-functions/v2/https");
const cors = require("cors")({origin: true});
const fetch = require("node-fetch");

exports.getTrendyolProducts = onRequest(
    {secrets: ["REACT_APP_API_TOKEN"]}, (request, response) => {
      cors(request, response, () => {
        const url = "https://api.trendyol.com/sapigw/suppliers/645403/products?onSale=true&size=9999";

        fetch(url, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${process.env.REACT_APP_API_TOKEN}`,
            "User-Agent": "645403 - SelfIntegration",
          },
        })
            .then((res) => res.json())
            .then((data) => {
              response.json(data);
            })
            .catch((err) => {
              console.error(err);
              response.status(500).send("Error");
            });
      });
    });
