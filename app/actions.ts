"use server";

import prisma from "@/libs/prisma";
import getSession from "@/libs/session";
import { PromiseReturnType } from "@prisma/client/extension";
import { redirect } from "next/navigation";
import { z } from "zod";

const tweetSchema = z.string();

export const createTweet = async (_: any, formData: FormData) => {
  const tweet = formData.get("tweet");

  const result = tweetSchema.safeParse(tweet);

  if (!result.success) {
    return result.error.flatten();
  }

  const session = await getSession();

  if (!session.id) {
    alert("로그인이 필요합니다");
    redirect("/intro");
  }

  await prisma.tweet.create({
    data: {
      tweet: result.data,
      userId: session.id,
    },
  });

  return {
    tweet: result.data,
  };
};

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
    orderBy: {
      created_at: "desc",
    },
    take: 3,
    skip: 3 * page,
  });

  return tweets;
};

export type tweetsTypes = PromiseReturnType<typeof getTweets>;
