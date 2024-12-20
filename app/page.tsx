"use client";

import {
  CheckBadgeIcon,
  EnvelopeIcon,
  FireIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import Input from "./components/Input";
import LoginButton from "./components/LoginButton";
import { handleForm } from "./actions";
import { useActionState } from "react";
import ErrorMessage from "./components/ErrorMessage";

export default function Home() {
  const [state, action] = useActionState(handleForm, null);

  return (
    <div className="flex flex-col gap-10 items-center p-20 h-full text-black">
      <FireIcon className="text-red-400 h-10 w-10" />
      <form action={action} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="relative">
            <EnvelopeIcon className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input placeholder="Email" type="email" name="email" required />
          </div>
          {state &&
            state !== true &&
            state.emailError?.map((error, index) => (
              <ErrorMessage key={"email-error" + index}>{error}</ErrorMessage>
            ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="relative">
            <UserIcon className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input placeholder="Username" type="name" name="name" required />
          </div>
          {state &&
            state !== true &&
            state.nameError?.map((error, index) => (
              <ErrorMessage key={"name-error" + index}>{error}</ErrorMessage>
            ))}
        </div>
        <div>
          <div className="relative">
            <KeyIcon className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              required
            />
          </div>
          {state &&
            state !== true &&
            state.passwordError?.map((error, index) => (
              <ErrorMessage key={"password-error" + index}>
                {error}
              </ErrorMessage>
            ))}
        </div>
        <LoginButton />
        {state === true && (
          <div className="w-80 bg-emerald-500 rounded-xl flex items-center p-3 gap-2">
            <CheckBadgeIcon className="size-4" />
            Welcome back!
          </div>
        )}
      </form>
    </div>
  );
}
