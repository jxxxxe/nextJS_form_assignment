import prisma from "@/libs/prisma";
import getSession from "@/libs/session";
import { logoutAction } from "./actions";

async function getUser() {
  const session = await getSession();
  const user = await prisma.user.findUnique({
    where: {
      id: session.id,
    },
  });

  return user;
}

export default async function ProfilePage() {
  const user = await getUser();

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
