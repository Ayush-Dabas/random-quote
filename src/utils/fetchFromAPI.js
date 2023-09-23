const axios = require("axios");

export const BASE_URL =
  "https://andruxnet-random-famous-quotes.p.rapidapi.com/";

const options = {
  method: "GET",
  params: {
    cat: "movies",
    count: "1",
  },
  headers: {
    "X-RapidAPI-Key": "ad80c8eb28msh8bd80eb7300fa11p11f6a1jsn81b54a12498c",
    "X-RapidAPI-Host": "andruxnet-random-famous-quotes.p.rapidapi.com",
  },
};

export const fetchFromAPI = async () => {
  console.log(options.params);
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
