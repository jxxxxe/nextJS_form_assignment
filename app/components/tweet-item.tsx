import Link from "next/link";

interface TweetItemProps {
  id: number;
  ownerId: number;
  ownerName: string;
  content: string;
}

export default function TweetItem({ id, ownerName, content }: TweetItemProps) {
  return (
    <Link
      className="flex w-full items-center border-b p-2"
      href={`/tweets/${id}`}
    >
      <div className="flex w-full flex-col">
        <span className="text-xl font-bold">{ownerName}</span>
        <span className="text-lg">{content}</span>
      </div>
    </Link>
  );
}
