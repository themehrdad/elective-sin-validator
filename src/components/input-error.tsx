type InputErrorProps = {
  error: string;
};

export default function InputError({ error }: InputErrorProps) {
  return (
    <p id="email-error" className="mt-2 text-sm text-red-600">
      {error}
    </p>
  );
}
