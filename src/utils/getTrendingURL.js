const getTrendingURL = (page, rating = 'r') => {
  const offset = page || 0;
  return `${process.env.REACT_APP_API_BASE_URL}/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25&rating=${rating}&offset=${offset * 25}`;
};

export default getTrendingURL;
