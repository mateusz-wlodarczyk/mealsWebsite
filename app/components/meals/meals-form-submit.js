"use client";
import { useActionState } from "react";
function MealsFormSubmit() {
  const { pending } = useActionState();
  return (
    <button disabled={pending}>
      {pending ? "submitting..." : "share meal"}
    </button>
  );
}

export default MealsFormSubmit;
