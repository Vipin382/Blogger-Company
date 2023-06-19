export const getData = async (type: string) => {
  try {
    const response = await fetch(
      `https://saurav.tech/NewsAPI/top-headlines/category/${type}/in.json`,
      { cache: "no-store" }
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
