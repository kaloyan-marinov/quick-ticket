/*
The path to this file contains `(auth)`

That is just a group (for organization purposes),
meaning that it's not actually going be part of the URL.
The URL will just be `/register`.
*/

import LoginForm from "./form";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/current-user";

const LoginPage = async () => {
  const user = await getCurrentUser();
  if (user) {
    redirect("/tickets");
  }

  return <LoginForm />;
};

export default LoginPage;
