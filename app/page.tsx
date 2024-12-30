import TweetList from "./components/tweet-list";
import { getTweets } from "./actions";
import AddTweet from "./components/add-tweet";

export default async function Home() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 pt-6 text-black">
      <AddTweet />
      <TweetList />
    </div>
  );
}
