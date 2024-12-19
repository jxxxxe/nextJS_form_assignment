"use server";

export async function handleForm(
  prevState: boolean | null,
  formData: FormData
) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return formData.get("password") === "12345" ? true : false;
}
