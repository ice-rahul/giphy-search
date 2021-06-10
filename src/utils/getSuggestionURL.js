const getSuggestionURL = (query, page) => {
  const offset = page || 0;
  return `${process.env.REACT_APP_API_BASE_URL}/search/tags?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=10&offset=${offset * 25}&q=${query}`;
};

export default getSuggestionURL;
