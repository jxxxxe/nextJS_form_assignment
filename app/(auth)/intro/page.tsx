import Link from "next/link";

export default function IntroPage() {
  return (
    <div className="flex flex-col gap-3 text-black justify-center items-center w-full h-full">
      <Link href="/log-in">로그인하기</Link>
      <Link href="/create-account">회원가입하기</Link>
    </div>
  );
}
