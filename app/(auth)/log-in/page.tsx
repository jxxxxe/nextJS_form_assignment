"use client";

import { EnvelopeIcon, FireIcon, KeyIcon } from "@heroicons/react/16/solid";
import Input from "../../components/Input";
import { loginAction } from "./actions";
import Button from "../../components/Button";
import { useFormState } from "react-dom";

export default function LoginPage() {
  const [state, action] = useFormState(loginAction, null);

  return (
    <div className="flex flex-col gap-10 items-center p-20 h-full text-black">
      <FireIcon className="text-red-400 h-10 w-10" />
      <form action={action} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="relative">
            <EnvelopeIcon className="size-4 absolute left-3 top-[1.4rem] transform -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Email"
              type="email"
              name="email"
              required
              errormessages={state?.fieldErrors.email}
            />
          </div>
        </div>
        <div>
          <div className="relative">
            <KeyIcon className="size-4 absolute left-3 top-[1.4rem] transform -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              required
              errormessages={state?.fieldErrors.password}
            />
          </div>
        </div>
        <Button>Log in</Button>
      </form>
    </div>
  );
}
