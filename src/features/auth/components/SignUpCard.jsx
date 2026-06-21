import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, Link, useActionData } from "react-router";
import { useEffect } from "react";

function SignUpCard() {
  const actionData = useActionData();

  return (
    <Card className={"w-full h-full border-none shadow-none md:w-121.75"}>
      <CardHeader className={"items-center justify-center text-center p-7"}>
        <CardTitle className={"text-2xl"}>Sign Up</CardTitle>

        <CardDescription>
          By Signing up, you agree to our{" "}
          <Link to={"/privacy"}>
            <span className="text-blue-700">Privacy Policy </span>
          </Link>
          and{" "}
          <Link to={"/terms"}>
            <span className="text-blue-700">Terms of services</span>
          </Link>
        </CardDescription>
      </CardHeader>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className={"p-7"}>
        <Form method="post" noValidate className="space-y-4">
          <Input
            required
            name="name"
            type={"text"}
            onChange={() => {}}
            placeholder="Enter your name"
            disabled={false}
            className={`${actionData?.errors?.name && "mb-1"}`}
          />
          {actionData?.errors?.name && (
            <p className="text-red-600 ">{actionData.errors.name[0]}</p>
          )}
          <Input
            required
            name="email"
            type={"email"}
            onChange={() => {}}
            placeholder="Enter email address"
            disabled={false}
            className={`${actionData?.errors?.email && "mb-1"}`}
          />
          {actionData?.errors?.email && (
            <p className="text-red-600">{actionData.errors.email[0]}</p>
          )}
          <Input
            required
            name="password"
            type={"password"}
            onChange={() => {}}
            placeholder="Enter password"
            disabled={false}
            min={8}
            max={256}
            className={`${actionData?.errors?.password && "mb-1"}`}
          />
          {actionData?.errors?.password && (
            <p className="text-red-600">{actionData.errors.password[0]}</p>
          )}
          <Button className={"w-full"} size="lg" disabled={false}>
            Sign Up
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
          Already have an account?
          <Link to={"/sign-in"}>
            <span className="text-blue-700">&nbsp;Sign In</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

export default SignUpCard;
