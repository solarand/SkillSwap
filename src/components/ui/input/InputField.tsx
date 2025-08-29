import type { RegisterFormValues } from "@/pages/auth/registerPage";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../errorMsh";

interface InputFieldProps {
  name: "name" | "surname" | "email" | "password" | "confirmPassword";
  type?: string;
  placeholder: string;
  register: UseFormRegister<RegisterFormValues>;
  required?: boolean;
  error?: FieldError;
  autoComplete?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  type = "text",
  placeholder,
  register,
  required = false,
  error,
  autoComplete = "off",
  onFocus,
  readOnly = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {type === "password" ? (
        <div className="flex flex-col gap-1">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              {...register(name, { required })}
              className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:pr-8"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {error && <ErrorMessage message={error.message} />}

          <div className="text-xs text-gray-500 mt-1 ml-1">
            Пароль должен содержать минимум 8 символов
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <input
            {...register(name, { required })}
            type={type}
            placeholder={placeholder}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete={autoComplete}
            onFocus={onFocus}
            readOnly={readOnly}
          />
          {error && <ErrorMessage message={error.message} />}
        </div>
      )}
    </>
  );
};
