export default function AddTweet() {
  return (
    <form className="flex w-full max-w-screen-sm flex-col border-b p-3">
      <input
        className="w-full bg-transparent text-xl font-medium"
        placeholder="무슨 일이 일어나고 있나요?"
      />
      <div className="self-end">
        <button className="rounded-3xl bg-neutral-300 px-4 py-2 font-semibold">
          게시하기
        </button>
      </div>
    </form>
  );
}
