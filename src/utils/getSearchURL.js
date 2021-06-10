const getSearchURL = (query, page, lang = 'en', rating = 'r') => {
  const offset = page || 0;
  return `${process.env.REACT_APP_API_BASE_URL}/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${query || ''}&limit=25&rating=${rating}&offset=${offset * 25}&lang=${lang || 'en'}`;
};

export default getSearchURL;
