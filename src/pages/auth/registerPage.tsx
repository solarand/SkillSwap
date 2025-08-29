/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { InputField } from "@/components/ui/input/InputField";

export interface RegisterFormValues {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IFormField {
  name: "name" | "surname" | "email" | "password" | "confirmPassword";
  type: string;
  placeholder: string;
  required: boolean;
  autoComplete: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log(data);
  };

  const formFields: IFormField[] = [
    {
      name: "name",
      type: "text",
      placeholder: "Имя",
      required: true,
      autoComplete: "off",
    },
    {
      name: "surname",
      type: "text",
      placeholder: "Фамилия",
      required: true,
      autoComplete: "off",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
      autoComplete: "off",
      onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.removeAttribute("readonly");
        if (e.target.value === "") {
          e.target.setAttribute("autocomplete", "new-email");
        }
      },
      readOnly: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Пароль",
      required: true,
      autoComplete: "new-password",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Подтвердите пароль",
      required: true,
      autoComplete: "new-password",
    },
  ];

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-black/45 backdrop-blur-sm z-0" />

      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <form
          className="shadow-2xl w-[600px] flex flex-col gap-6 p-8 rounded-3xl bg-white max-[600px]:w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-3xl font-bold text-cast-gray text-center mb-6">
            Создать аккаунт
          </h2>

          {formFields.map((el) => (
            <InputField
              key={el.name}
              {...el}
              register={register}
              error={errors.name}
            />
          ))}

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 cursor-pointer transition-colors mt-2"
          >
            Зарегистрироваться
          </button>

          <div className="text-center mt-4 text-sm">
            <span className="text-gray-600">Уже есть аккаунт? </span>
            <Link
              to="/login"
              className="text-blue-600 hover:underline hover:text-blue-800"
            >
              Войти
            </Link>
          </div>
          <div className="text-center mt-6">
            <Link
              to="/"
              className="text-gray-500 hover:text-blue-600 hover:underline"
            >
              ← Вернуться на главную
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
