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
    <div className="flex flex-col h-screen text-black p-5 border-x gap-1">
      <span className="text-lg font-semibold">{username}</span>
      <div className="text-lg">{tweet}</div>
      <span className="text-sm text-neutral-500">{created_at.toString()}</span>
      <div className="flex flex-col w-full justify-center items-center text-neutral-600 border-y py-2 my-2">
        <HeartIcon className="size-5" />
        {likesCount}
      </div>
    </div>
  );
}
