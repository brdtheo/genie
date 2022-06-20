export const getSearchRequestURL = (searchInput) => {
  const baseURL = "https://api.genius.com/search?q=";
  const query = encodeURIComponent(searchInput.trim());
  const accessTokenParam = `&access_token=${process.env.REACT_APP_GENIUS_API_KEY}`;
  return baseURL + query + accessTokenParam;
};
