import type { UseFormRegisterReturn } from "react-hook-form";


interface TextareaFieldProps {
  label: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: string;
}

export function TextareaField({ label, placeholder, registration, error }: TextareaFieldProps) {
  return (
    <div className="grid gap-1">
      <label className="font-semibold text-white">{label}</label>
      <textarea
        placeholder={placeholder}
        {...registration}
        className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
