import { InputHTMLAttributes } from "react";

interface inputPros extends InputHTMLAttributes<HTMLInputElement> {
  errormessages?: string[];
}

export default function Input(props: inputPros) {
  return (
    <div className="flex flex-col gap-1">
      <input
        {...props}
        className={`rounded-full border bg-transparent p-1 py-3 pl-8 text-xs outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 ${
          props.errormessages?.at(0) && "border-red-400 focus:ring-red-400"
        }`}
      />
      {props.errormessages?.map((errorMessage: string, idx: number) => (
        <div key={idx} className="w-50 ml-3 mt-1 text-xs text-red-500">
          {errorMessage}
        </div>
      ))}
    </div>
  );
}
