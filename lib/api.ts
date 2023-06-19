import axios from "axios";

export const getData = async (type: string) => {
  const options = {
    method: "GET",
    url: `https://saurav.tech/NewsAPI/top-headlines/category/${type}/in.json`,
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
