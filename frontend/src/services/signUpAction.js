import * as z from "zod";

export default async function signUpAction({ request }) {
  const formData = await request.formData();

  const userData = Object.fromEntries(formData);

  const UserSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().nonempty("Email is required").email("Invalid email"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const result = UserSchema.safeParse(userData);

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
