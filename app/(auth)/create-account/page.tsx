"use client";

import { SignupAction } from "./action";
import {
  EnvelopeIcon,
  FireIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useFormState } from "react-dom";

export default function CreateAccount() {
  const [state, action] = useFormState(SignupAction, null);

  return (
    <div className="flex h-full flex-col items-center gap-10 p-20 text-black">
      <FireIcon className="h-10 w-10 text-red-400" />
      <form action={action} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-[1.4rem] size-4 -translate-y-1/2 transform text-gray-500" />
            <Input
              placeholder="Email"
              type="email"
              name="email"
              required
              errormessages={state?.fieldErrors.email}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="relative">
            <UserIcon className="absolute left-3 top-[1.4rem] size-4 -translate-y-1/2 transform text-gray-500" />
            <Input
              placeholder="Username"
              type="name"
              name="name"
              required
              errormessages={state?.fieldErrors.name}
            />
          </div>
        </div>
        <div className="relative">
          <KeyIcon className="absolute left-3 top-[1.4rem] size-4 -translate-y-1/2 transform text-gray-500" />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            required
            errormessages={state?.fieldErrors.password}
          />
        </div>
        <div className="relative">
          <KeyIcon className="absolute left-3 top-[1.4rem] size-4 -translate-y-1/2 transform text-gray-500" />
          <Input
            placeholder="Confirm Password"
            type="password"
            name="confirm_password"
            required
            errormessages={state?.fieldErrors.confirm_password}
          />
        </div>
        <Button>Sign up</Button>
      </form>
    </div>
  );
}
