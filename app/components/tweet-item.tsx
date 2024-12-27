import getSession from "@/libs/session";
import Link from "next/link";
import { redirect } from "next/navigation";

interface TweetItemProps {
  id: number;
  ownerId: number;
  ownerName: string;
  content: string;
}

export default function TweetItem({ id, ownerName, content }: TweetItemProps) {
  return (
    <Link className="flex w-full items-center p-2" href={`/tweets/${id}`}>
      <div className="flex w-full flex-col">
        <span className="text-lg font-bold">{ownerName}</span>
        <span>{content}</span>
      </div>
    </Link>
  );
}
