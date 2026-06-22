import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, Link, useActionData, useNavigation } from "react-router";
import { useEffect, useState } from "react";

function SignInCard() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const actionData = useActionData();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (actionData?.errors) {
      setErrors(actionData.errors);
    }
  }, [actionData]);

  return (
    <Card className={"w-full h-full border-none shadow-none md:w-121.75"}>
      <CardHeader
        className={"flex items-center justify-center text-center p-7"}
      >
        <CardTitle className={"text-2xl"}>Welcome Back</CardTitle>
      </CardHeader>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className={"p-7"}>
        <Form method="post" noValidate className="space-y-4">
          <Input
            onChange={() =>
              setErrors((prev) => ({
                ...prev,
                email: undefined,
              }))
            }
            required
            name="email"
            type="email"
            placeholder="Enter email address"
            disabled={false}
          />
          {errors.email && (
            <p className="text-red-600 ml-1">{errors.email}</p>
          )}
          <Input
            onChange={() =>
              setErrors((prev) => ({
                ...prev,
                password: undefined,
              }))
            }
            required
            name="password"
            type="password"
            placeholder="Enter password"
            disabled={false}
            min={8}
            max={256}
          />
          {errors.password && (
            <p className="text-red-600 ml-1">{errors.password}</p>
          )}
          <Button className={"w-full"} size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className={"p-7 flex flex-col gap-y-4"}>
        <Button
          disabled={false}
          variant="secondary"
          size="lg"
          className={"w-full"}
        >
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button
          disabled={false}
          variant="secondary"
          size="lg"
          className={"w-full"}
        >
          <FaGithub className="mr-2 size-5" />
          Login with Github
        </Button>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className={"p-7 flex items-center justify-center"}>
        <p>
          Don&apos;t have an account?
          <Link to={"/sign-up"}>
            <span className="text-blue-700">&nbsp;Sign Up</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

export default SignInCard;
