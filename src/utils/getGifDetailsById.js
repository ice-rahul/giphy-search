const getGifDetailsById = (id) => (
  `https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`
);

export default getGifDetailsById;
