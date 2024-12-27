import { HeartIcon } from "@heroicons/react/24/outline";

interface TweetDetailProps {
  id: number;
  tweet: string;
  username: string;
  created_at: Date;
  likesCount: number;
}

export default function TweetDetail({
  id,
  tweet,
  username,
  created_at,
  likesCount,
}: TweetDetailProps) {
  return (
    <div className="flex h-screen flex-col gap-1 border-x p-5 text-black">
      <span className="text-lg font-semibold">{username}</span>
      <div className="text-lg">{tweet}</div>
      <span className="text-sm text-neutral-500">{created_at.toString()}</span>
      <div className="my-2 flex w-full flex-col items-center justify-center border-y py-2 text-neutral-600">
        <HeartIcon className="size-5" />
        {likesCount}
      </div>
    </div>
  );
}
