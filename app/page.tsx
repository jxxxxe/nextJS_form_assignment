import TweetList from "./components/tweet-list";
import { getTweets } from "./actions";

export default async function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 divide-y-2 text-black">
      <TweetList />
    </div>
  );
}
