import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export default async function getSession() {
  const session = await getIronSession<{ id: number }>(cookies(), {
    cookieName: "login-session",
    password: process.env.IRON_COOKIE_PASSWORD!,
  });

  return session;
}
