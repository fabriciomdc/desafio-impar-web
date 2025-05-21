import type { LucideIcon } from "lucide-react";
import type { UseFormRegisterReturn } from "react-hook-form";


interface InputFieldProps {
  label: string;
  placeholder?: string;
  Icon: LucideIcon;
  type?: string;
  registration: UseFormRegisterReturn;
  error?: string;
}

export function InputField({
  label,
  placeholder,
  Icon,
  type = "text",
  registration,
  error
}: InputFieldProps) {
  return (
    <div className="grid gap-1">
      <label className="font-semibold text-white">{label}</label>
      <div className="relative flex items-center">
        <Icon className="absolute left-3 text-gray-400" size={16} />
        <input
          type={type}
          placeholder={placeholder}
          {...registration}
          className="w-full rounded-md border border-gray-300 bg-white px-10 py-3 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
        />
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
