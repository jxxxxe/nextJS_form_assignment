"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";
import getSession from "@/libs/session";
import { redirect } from "next/navigation";

const isUniqueEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return !Boolean(user);
};

const isUniqueName = async (name: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username: name,
    },
  });

  return !Boolean(user);
};

const userSchema = z
  .object({
    email: z
      .string()
      .endsWith("zod.com", "Only @zod.com emails are allowed.")
      .refine(isUniqueEmail, "This email already exists"),
    name: z
      .string()
      .min(5, "Username sholud be at least 5 characters long.")
      .refine(isUniqueName, "This username already exists"),
    password: z
      .string()
      .min(10, "Password sholud be at least 10 characters long.")
      .regex(/\d/, "Password should contain at least one number (0123456789)."),
    confirm_password: z.string(),
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

export async function SignupAction(_: any, formData: FormData) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const userData = {
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = await userSchema.spa(userData);

  if (!result.success) {
    return result.error.flatten();
  }

  const encryptedPassword = await bcrypt.hash(result.data?.password, 12);

  const user = await prisma.user.create({
    data: {
      email: result.data.email,
      username: result.data.name,
      password: encryptedPassword,
    },
    select: {
      id: true,
    },
  });

  const session = await getSession();
  session.id = user.id;
  session.save();

  redirect("/profile");
}
