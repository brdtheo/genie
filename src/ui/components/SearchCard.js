import React from "react";
import { useSelector } from "react-redux";
import { MdVerified } from "react-icons/md";
import { IoEye } from "react-icons/io5";

import { parseViews } from "../../api/helpers";

export default function SearchCard(props) {
  const loading = useSelector((state) => state.homeReducer.loading);
  const { item, type, artistName, artistImage, artistIsVerified } = props;

  return (
    <>
      {loading ? (
        <article className="w-full h-20 flex bg-white bg-opacity-5">
          <div className="w-20 h-full animate-pulse bg-white bg-opacity-20"></div>

          <div className="ml-4 py-2 flex-1">
            <div className="animate-pulse bg-white bg-opacity-20 h-6 w-3/4 md:w-72 mb-2"></div>
            <div className="animate-pulse bg-white bg-opacity-20 h-5 w-1/2 md:w-56"></div>
          </div>
        </article>
      ) : (
        <>
          {type === "song" ? (
            <article className="text-white w-full h-20 flex bg-white bg-opacity-5 hover:bg-opacity-10 transition-colors">
              <figure className="w-20 h-20">
                <img
                  src={item.result.song_art_image_thumbnail_url}
                  alt={`${item.result.title} by ${item.result.artist_names}`}
                  className="w-full h-full"
                />
              </figure>

              <div className="ml-4 py-2 flex-1 flex flex-col justify-between">
                <div className="">
                  <h3 className="text-sm font-semibold leading-none text-ellipsis whitespace-nowrap overflow-hidden w-11/12">
                    {item.result.title}
                  </h3>
                  <span className="text-sm text-white text-opacity-60 text-ellipsis whitespace-nowrap overflow-hidden w-44 md:w-full block md:inline">
                    {item.result.artist_names}
                  </span>
                </div>

                <span className="flex align-bottom font-semibold text-xs text-white leading-none">
                  <IoEye className="mr-1" />
                  {parseViews(item.result.stats.pageviews)}
                </span>
              </div>
            </article>
          ) : (
            <article className="text-white w-full h-20 flex bg-white bg-opacity-5 hover:bg-opacity-10 transition-colors">
              <figure className="w-20 h-20">
                <img src={artistImage} alt={artistName} className="w-full h-full" />
              </figure>

              <div className="ml-4 py-2 flex-1">
                <div className="flex">
                  <h3 className="text-sm font-semibold leading-none">
                    {artistName}
                  </h3>
                  {artistIsVerified && (
                    <MdVerified className="text-lemon ml-1 text-sm" />
                  )}
                </div>
              </div>
            </article>
          )}
        </>
      )}
    </>
  );
}
