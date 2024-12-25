import prisma from "@/libs/prisma";
import getSession from "@/libs/session";
import { logoutAction } from "./actions";

export default async function ProfilePage() {
  const session = await getSession();
  const user = await prisma.user.findUnique({
    where: {
      id: session.id,
    },
  });

  return (
    <div className="text-black">
      <h1>Profile</h1>
      <span>Hi, {user?.username}</span>
      <form action={logoutAction}>
        <button>로그아웃하기</button>
      </form>
    </div>
  );
}
