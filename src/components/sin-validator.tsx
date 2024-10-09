"use client";
import { useState } from "react";
import useSinValidator from "@/lib/use-sin-validator";
import StatusIcon from "@/components/status-icon";
import InputError from "@/components/input-error";

type SinValidatorProps = {
  label: string;
};

export default function SinValidator(props: SinValidatorProps) {
  const { label } = props;
  const [sin, setSin] = useState("");
  const { valid, reason } = useSinValidator(sin);
  const isEmpty = sin?.length === 0;
  const shouldShowReason = !isEmpty && !valid;

  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          value={sin}
          maxLength={9}
          onChange={(e) => setSin(e.target.value)}
          placeholder="Enter SIN"
          className={`border border-gray-300 rounded-md p-2 ${
            isEmpty
              ? ""
              : valid
                ? "border-green-500 bg-green-100"
                : "border-red-500 bg-red-100"
          }`}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <StatusIcon valid={valid} unknown={isEmpty} />
        </div>
      </div>
      {shouldShowReason && <InputError error={reason} />}
    </div>
  );
}
