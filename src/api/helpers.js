const numeral = require("numeral");

export const getSearchRequestURL = (searchInput) => {
  const baseURL = "https://api.genius.com/search?q=";
  const query = encodeURIComponent(searchInput.trim());
  const accessTokenParam = `&access_token=${process.env.REACT_APP_GENIUS_API_KEY}`;
  return baseURL + query + accessTokenParam;
};

export const parseArtists = (songs) => {
  const parsedArtists = [];
  for (const item of songs) {
    // parse primary artist
    if (item && item.result && item.result.primary_artist) {
      const { id, name, image_url } = item.result.primary_artist;
      const primaryArtist = { id, name, image_url };
      if (!parsedArtists.find((e) => e.id === primaryArtist.id)) {
        parsedArtists.push(primaryArtist);
      }
    }

    // parse featured artists
    if (item && item.result && item.result.featured_artists) {
      for (const artist of item.result.featured_artists) {
        const { id, name, image_url, is_verified } = artist;
        const featuredArtist = { id, name, image_url, is_verified };
        if (!parsedArtists.find((e) => e.id === featuredArtist.id)) {
          parsedArtists.push(featuredArtist);
        }
      }
    }
  }
  return parsedArtists;
};

export const parseViews = (views) => {
  if (!views) {
    return 0;
  } else if (views < 1000) {
    return views;
  } else {
    return numeral(views).format("0.0a").toUpperCase();
  }
};
