import { InputHTMLAttributes } from "react";

interface inputPros extends InputHTMLAttributes<HTMLInputElement> {
  errorMessages?: string[];
}

export default function Input(props: inputPros) {
  return (
    <div className="flex flex-col gap-1">
      <input
        {...props}
        className="pl-8 py-3 border rounded-full text-xs bg-transparent p-1 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-300 focus:border-neutral-200"
      />
      {props.errorMessages?.map((errorMessage: string, idx: number) => (
        <div key={idx} className="w-50 text-red-500 text-xs ml-3 mt-1">
          {errorMessage}
        </div>
      ))}
    </div>
  );
}
