import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";

type StatusIconProps = {
  valid: boolean;
  unknown: boolean;
};

export default function StatusIcon({ valid, unknown }: StatusIconProps) {
  const IconType = unknown
    ? QuestionMarkCircleIcon
    : valid
      ? CheckCircleIcon
      : ExclamationCircleIcon;
  const color = unknown
    ? "text-gray-500"
    : valid
      ? "text-green-500"
      : "text-red-500";

  return <IconType aria-hidden="true" className={`h-5 w-5 ${color}`} />;
}
