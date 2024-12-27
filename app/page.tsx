import TweetList from "./components/tweet-list";
import { getTweets } from "./actions";

export default async function Home() {
  return (
    <div className="flex flex-col divide-y-2 gap-3 text-black justify-center items-center w-full h-full">
      <TweetList />
    </div>
  );
}
