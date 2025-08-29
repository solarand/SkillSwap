import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import ErrorMessage from "../errorMsh";
import authValidate from "@/utils/authValidate";
import type { InputFieldProps } from "@/utils/types/authType";

export const InputField: React.FC<InputFieldProps> = ({
  nameField,
  type = "text",
  placeholder,
  register,
  watch,
  error,
  autoComplete = "off",
  onFocus,
  readOnly = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const passwordLength = watch(nameField);

  const requiredError = {
    name: "Введите имя",
    surname: "Введите фамилию",
    email: "Введите email",
    password: "Введите пароль",
    confirmPassword: "Подтвердите пароль",
  };

  const validateField = {
    password: (value: string) => authValidate.validatePassword(value),
    email: (value: string) => authValidate.validateEmail(value),
    name: (value: string) => authValidate.validateFirstName(value),
    surname: (value: string) => authValidate.validateLastName(value),
    confirmPassword: (value: string) =>
      authValidate.validateConfirmPassword(value, watch("password")),
  };

  return (
    <>
      {type === "password" ? (
        <div className="flex flex-col gap-1">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              {...register(nameField, {
                required: requiredError[nameField],
                validate: validateField[nameField],
              })}
              className={`border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${passwordLength && "focus:pr-8"}`}
            />
            {passwordLength && (
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
            )}
          </div>

          {error && <ErrorMessage message={error} />}

          {nameField === "password" && (
            <div className="text-xs text-gray-500 mt-1 ml-1">
              Пароль должен содержать: минимум 8 символов, заглавные и строчные
              английские буквы, цифры, специальные символы
              !@#$%^&amp;*_+-=[]&#123;&#125;;:&apos;&quot;,.&lt;&gt;/?
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <input
            {...register(nameField, {
              required: requiredError[nameField],
              validate: validateField[nameField],
            })}
            type={type}
            placeholder={placeholder}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete={autoComplete}
            onFocus={onFocus}
            readOnly={readOnly}
          />
          {error && <ErrorMessage message={error} />}
        </div>
      )}
    </>
  );
};
