import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { parseArtists } from "../../api/helpers";

import SearchCard from "./SearchCard";

export default function SearchCardList(props) {
  const [artists, setArtists] = useState(null);
  const queryResult = useSelector((state) => state.homeReducer.queryResult);

  const { type } = props;
  const isTypeArtist = type === "artist";

  useEffect(() => {
    if (isTypeArtist) {
      const parsedArtists = parseArtists(queryResult);
      setArtists(parsedArtists);
    }
  }, [queryResult, isTypeArtist]);

  return (
    <div className="py-5 md:py-6 grid gap-3 md:gap-4">
      {!isTypeArtist &&
        queryResult.map((item) => (
          <SearchCard item={item} key={item.result.api_path} type={type} />
        ))}

      {isTypeArtist &&
        artists &&
        artists.length > 0 &&
        artists.map((item) => (
          <SearchCard
            artistName={item.name}
            artistImage={item.image_url}
            artistIsVerified={item.is_verified}
            key={item.id}
            type={type}
          />
        ))}
    </div>
  );
}
