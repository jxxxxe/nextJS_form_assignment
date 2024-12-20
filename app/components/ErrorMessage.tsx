import { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return <div className="text-red-500 text-xs ml-3 mt-1">{children}</div>;
};

export default ErrorMessage;
