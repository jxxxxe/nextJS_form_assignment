"use client";

import { PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  disabled?: boolean;
}

export default function Button({ children, className, disabled }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending || disabled}
      className={
        className
          ? className
          : "h-10 w-80 rounded-full bg-neutral-200 disabled:cursor-none disabled:bg-neutral-500 disabled:text-neutral-400"
      }
    >
      {pending ? "Loading..." : children}
    </button>
  );
}
