"use client";

import { useEffect, useState } from "react";
import { getTweets, tweetsTypes } from "../actions";
import TweetItem from "./tweet-item";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

export default function TweetList() {
  const [page, setPage] = useState(0);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTweets, setCurrentTweets] = useState<tweetsTypes>();

  useEffect(() => {
    const loadPage = async (page: number) => {
      if (page === 0) {
        setIsFirstPage(true);
      } else {
        setIsFirstPage(false);
      }

      setIsLoading(true);
      const newTweets = await getTweets(page);

      if (!newTweets.length) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
        setCurrentTweets(newTweets);
      }
      setIsLoading(false);
    };
    loadPage(page);
  }, [page]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {currentTweets?.map((tweet, index) => (
        <TweetItem
          key={"tweet" + index}
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
          className="size-9 disabled:text-neutral-400"
        >
          <ArrowLeftCircleIcon />
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={isLoading || isLastPage}
          className="size-9 disabled:text-neutral-400"
        >
          <ArrowRightCircleIcon />
        </button>
      </div>
    </div>
  );
}
