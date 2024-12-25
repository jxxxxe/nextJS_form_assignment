"use server";

import getSession from "@/libs/session";

export async function logoutAction() {
  const session = await getSession();
  session.destroy();
}
