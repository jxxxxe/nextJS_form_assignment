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
        <div className="flex flex-col gap-1">
          <div className="relative">
            <UserIcon className="size-4 absolute left-3 top-[1.4rem] transform -translate-y-1/2 text-gray-500" />
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
          <KeyIcon className="size-4 absolute left-3 top-[1.4rem] transform -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            required
            errormessages={state?.fieldErrors.password}
          />
        </div>
        <div className="relative">
          <KeyIcon className="size-4 absolute left-3 top-[1.4rem] transform -translate-y-1/2 text-gray-500" />
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
