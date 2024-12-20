"use server";

import { z } from "zod";

export interface UserData {
  emailError?: string[];
  nameError?: string[];
  passwordError?: string[];
}

const userSchema = z.object({
  email: z.string().endsWith("zod.com", "Only @zod.com emails are allowed."),
  name: z.string().min(5, "Username sholud be at least 5 characters long."),
  password: z
    .string()
    .min(10, "Password sholud be at least 10 characters long.")
    .regex(/\d/, "Password should contain at least one number (0123456789)."),
});

export async function handleForm(
  prevState: boolean | UserData | null,
  formData: FormData
) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  const userData = {
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
  };

  const result = userSchema.safeParse(userData);

  if (!result.success) {
    const formatted = result.error.format();

    return {
      emailError: formatted.email?._errors,
      nameError: formatted.name?._errors,
      passwordError: formatted.password?._errors,
    };
  }

  return true;
}
