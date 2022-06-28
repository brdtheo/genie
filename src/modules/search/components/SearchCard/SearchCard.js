import React from "react";
import { useSelector } from "react-redux";
import { MdVerified } from "react-icons/md";
import { IoEye } from "react-icons/io5";

import { parseViews } from "../../../../api/helpers";
import SearchCardLoading from "./SearchCardLoading";

export default function SearchCard(props) {
  const loading = useSelector((state) => state.search.loading);
  const { item, type, artistName, artistImage, artistIsVerified } = props;
  const isTypeSong = type === "song";

  const getImage = () =>
    isTypeSong ? item.result.song_art_image_thumbnail_url : artistImage;

  const getImageAlt = () =>
    isTypeSong
      ? `${item.result.title} by ${item.result.artist_names}`
      : artistName;

  const getHeading = () => (isTypeSong ? item.result.title : artistName);

  return (
    <>
      {loading ? (
        <SearchCardLoading />
      ) : (
        <article
          className="text-white w-full h-20 flex bg-white bg-opacity-5 hover:bg-opacity-10 transition-colors"
          data-testid="search-card"
        >
          <figure className="w-20 h-20 overflow-hidden">
            <img
              src={getImage()}
              alt={getImageAlt()}
              className="w-full h-full"
            />
          </figure>

          <div className="ml-4 py-2 flex-1 flex flex-col justify-between">
            <div className={`${isTypeSong ? "" : "flex min-w-fit"}`}>
              <h3 className="text-sm font-semibold leading-none text-ellipsis whitespace-nowrap overflow-hidden">
                {getHeading()}
              </h3>

              {isTypeSong && (
                <span className="text-sm text-white text-opacity-60 text-ellipsis whitespace-nowrap overflow-hidden w-44 md:w-full block md:inline">
                  {item.result.artist_names}
                </span>
              )}

              {artistIsVerified && (
                <MdVerified className="text-lemon ml-1 text-sm" />
              )}
            </div>

            {isTypeSong && (
              <span className="flex align-bottom font-semibold text-xs text-white leading-none">
                <IoEye className="mr-1" />
                {parseViews(item.result.stats.pageviews)}
              </span>
            )}
          </div>
        </article>
      )}
    </>
  );
}
