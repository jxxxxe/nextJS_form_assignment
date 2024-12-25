"use client";

import {
  CheckBadgeIcon,
  EnvelopeIcon,
  FireIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import Input from "../components/Input";
import { loginAction } from "./actions";
import Button from "../components/Button";
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
              errorMessages={state?.fieldErrors.email}
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
              errorMessages={state?.fieldErrors.password}
            />
          </div>
        </div>
        <Button>Log in</Button>
        {!state?.fieldErrors && (
          <div className="w-80 bg-emerald-500 rounded-xl flex items-center p-3 gap-2">
            <CheckBadgeIcon className="size-4" />
            Welcome back!
          </div>
        )}
      </form>
    </div>
  );
}
