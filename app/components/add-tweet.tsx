"use client";

import { useFormState } from "react-dom";
import { createTweet } from "../actions";
import Button from "./Button";
import { useEffect } from "react";

export default function AddTweet() {
  const [state, action] = useFormState(createTweet, null);

  return (
    <form
      action={action}
      className="flex w-full max-w-screen-sm flex-col border-b p-3"
    >
      <input
        name="tweet"
        className="h-fit w-full bg-transparent text-xl font-medium outline-none"
        placeholder="무슨 일이 일어나고 있나요?"
        required
      />
      <span>{!state?.formErrors}</span>
      <Button className="self-end rounded-3xl bg-neutral-300 px-4 py-2 font-semibold">
        게시하기
      </Button>
    </form>
  );
}
