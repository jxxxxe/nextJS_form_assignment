"use server";

import prisma from "@/libs/prisma";
import { PromiseReturnType } from "@prisma/client/extension";

export const getTweets = async (page: number) => {
  const tweets = await prisma.tweet.findMany({
    include: {
      user: {
        select: {
          id: true,
          username: true,
        },
      },
    },
    take: 3,
    skip: page,
  });

  return tweets;
};

export type tweetsTypes = PromiseReturnType<typeof getTweets>;
