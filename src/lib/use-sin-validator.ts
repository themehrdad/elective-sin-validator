import { useMemo, useState } from "react";
import { validateSin } from "@/lib/validate-sin";

export default function useSinValidator(sin: string) {
  const [valid, setValid] = useState(false);
  const [reason, setReason] = useState("");

  useMemo(() => {
    const { valid, reason } = validateSin(sin);
    setValid(valid);
    setReason(reason);
  }, [sin]);

  return { valid, reason };
}
