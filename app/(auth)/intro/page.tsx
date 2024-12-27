import Link from "next/link";

export default function IntroPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-black">
      <Link href="/log-in">로그인하기</Link>
      <Link href="/create-account">회원가입하기</Link>
    </div>
  );
}
