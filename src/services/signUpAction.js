import * as z from "zod";

export default async function signUpAction({ request }) {
  const formData = await request.formData();

  const userData = Object.fromEntries(formData);

  const User = z.object({
    name: z.string(),
    email: z.email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  const result = User.safeParse(userData);

  console.log(result);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  return {
    success: true,
  };
}
