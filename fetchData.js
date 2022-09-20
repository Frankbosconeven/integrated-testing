const axios = require("axios");

const baseUrl = "https://jsonplaceholder.typicode.com";

exports.fetchData = async (endpoint) => {
    try {
        const result = await axios (`${baseUrl}/${endpoint}`);
        return result.data;
    } catch (error) {
        console.log(error.message)
    }
};
