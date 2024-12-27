import TweetDetail from "@/app/components/tweet-detail";
import prisma from "@/libs/prisma";
import { notFound } from "next/navigation";

async function getTweet(id: number) {
  if (isNaN(id)) {
    notFound();
  }
  const tweet = await prisma.tweet.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
      likes: {
        select: {
          id: true,
        },
      },
    },
  });

  if (!tweet) {
    notFound();
  }

  return tweet;
}

export default async function TweetDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { tweet, user, created_at, likes } = await getTweet(Number(id));
  return (
    <TweetDetail
      id={Number(id)}
      tweet={tweet}
      username={user.username}
      created_at={created_at}
      likesCount={likes.length}
    />
  );
}
