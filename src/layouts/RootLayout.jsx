import { Button } from "@/components/ui/button";
import { Outlet, Link } from "react-router";

export default function RootLayout() {
  return (
    <>
      <main className="bg-neutral-100 min-h-screen">
        <div className="mx-auto max-w-screen-2xl p-4">
          <nav className="flex justify-between items-center">
            <img src="/logo.svg" alt="logo" width={152} height={56} />
            <Link to={"/sign-up"}>
              <Button variant="secondary">SignUp</Button>
            </Link>
          </nav>
          <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}
