import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full pl-8 py-3 border rounded-full text-xs bg-transparent p-1 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-300 focus:border-neutral-200"
    />
  );
}
