"use client";

import { PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";

export default function Button({ children }: PropsWithChildren) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="h-10 w-80 rounded-full bg-neutral-200 disabled:bg-neutral-300 disabled:text-neutral-400"
    >
      {pending ? "Loading..." : children}
    </button>
  );
}
