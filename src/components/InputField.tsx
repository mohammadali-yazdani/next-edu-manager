import { FieldError, UseFormRegister } from "react-hook-form";

type InputFieldProps<T extends Record<string, unknown>> = {
  label: string;
  type?: string;
  register: UseFormRegister<T>;
  name: keyof T;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = <T extends Record<string, unknown>>({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps<T>) => {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2 relative flex flex-col h-fit">
      <label className="text-sm mb-1" htmlFor={name.toString()}>
        {label}
      </label>
      <input
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        type={type}
        id={String(name)}
        defaultValue={defaultValue}
        {...register(name as never)}
        {...inputProps}
      />

      <p className="text-red-500 text-xs mt-3 min-h-4">
        {error && error.message?.toString()}
      </p>
    </div>
  );
};

export default InputField;
