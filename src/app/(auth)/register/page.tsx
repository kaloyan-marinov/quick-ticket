/*
The path to this file contains `(auth)`

That is just a group (for organization purposes),
meaning that it's not actually going be part of the URL.
The URL will just be `/register`.
*/

import RegisterForm from "./form";
import { getCurrentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const user = await getCurrentUser();
  if (user) {
    redirect("/tickets");
  }

  return <RegisterForm />;
};

export default RegisterPage;
