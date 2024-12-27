"use client";

import { useEffect, useState } from "react";
import { getTweets, tweetsTypes } from "../actions";
import TweetItem from "./tweet-item";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

export default function TweetList(tweets: tweetsTypes) {
  const tweetList = Object.values(tweets);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [totalTweets, setTotalTweets] = useState(tweetList);

  useEffect(() => {
    const loadPage = async (page: number) => {
      if (page === 0) {
        setIsFirstPage(true);
      }
      setIsLoading(true);
      setIsFirstPage(false);
      const newTweets = await getTweets(page);

      if (newTweets.length) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
        setTotalTweets((prev) => [...prev, ...newTweets]);
      }
      setIsLoading(false);
    };
    loadPage(page);
  }, [page]);

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      {totalTweets?.map((tweet) => (
        <TweetItem
          id={tweet.id}
          ownerId={tweet.userId}
          ownerName={tweet.user.username}
          content={tweet.tweet}
        />
      ))}
      <div>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={isLoading || isFirstPage}
          className="disabled:text-neutral-700 size-9"
        >
          <ArrowLeftCircleIcon />
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={isLoading || isLastPage}
          className="disabled:text-neutral-700 size-9"
        >
          <ArrowRightCircleIcon />
        </button>
      </div>
    </div>
  );
}
