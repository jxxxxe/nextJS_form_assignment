"use server";

import prisma from "@/libs/prisma";
import { z } from "zod";
import bcrypt from "bcrypt";
import getSession from "@/libs/session";
import { redirect } from "next/navigation";

const emailExist = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return Boolean(user);
};

const userSchema = z.object({
  email: z.string().refine(emailExist, "This email does not exist"),
  password: z.string(),
});

export async function loginAction(_: any, formData: FormData) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const userData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await userSchema.safeParseAsync(userData);

  if (!result.success) {
    return result.error.flatten();
  }

  const user = await prisma.user.findUnique({
    where: {
      email: result.data.email,
    },
    select: {
      id: true,
      password: true,
    },
  });

  const isCorrectPassword = await bcrypt.compare(
    result.data.password,
    user!.password
  );

  if (!isCorrectPassword) {
    return {
      fieldErrors: {
        email: [""],
        password: ["Worng password"],
      },
    };
  }

  const session = await getSession();
  session.id = user!.id;

  await session.save();

  redirect("/");
}
