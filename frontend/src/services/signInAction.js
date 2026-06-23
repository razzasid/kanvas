import * as z from "zod";
import { redirect } from "react-router";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3000"

const signInSchema = z.object({
  email: z.string().trim().nonempty("Email is required").email("Invalid email"),
  password: z.string().nonempty("Password is required").min(8, "Password must be at least 8 characters"),
})

export default async function SignInAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const result = signInSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${API_BASE}/api/auth/sign-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(result.data),
  });

  const responseBody = await response.json().catch(() => null);
  if (!response.ok) {
    return {
      errors: responseBody?.errors || { global: [responseBody?.message || "Unable to sign in"] },
    };
  }

  return redirect("/");
}
