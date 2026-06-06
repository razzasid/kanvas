import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function SignInCard() {
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
        <form className="space-y-4">
          <Input
            required
            type={"email"}
            value={""}
            onChange={() => {}}
            placeholder="Enter email address"
            disabled={false}
          />
          <Input
            required
            type={"password"}
            value={""}
            onChange={() => {}}
            placeholder="Enter password"
            disabled={false}
            min={8}
            max={256}
          />
          <Button className={"w-full"} size="lg" disabled={false}>
            Login
          </Button>
        </form>
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
    </Card>
  );
}

export default SignInCard;
