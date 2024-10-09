import SinValidator from "@/components/sin-validator";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Elective SIN Validator</h1>
        <p className="text-lg">Enter a SIN number to validate it.</p>
        <SinValidator label="Sin Number Validator - Basic" />
      </main>
    </div>
  );
}
