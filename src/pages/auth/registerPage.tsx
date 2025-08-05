import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-black/45 backdrop-blur-sm z-0" />

      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <form className="shadow-2xl w-[600px] flex flex-col gap-6 p-8 rounded-3xl bg-white max-[600px]:w-full">
          <h2 className="text-3xl font-bold text-cast-gray text-center mb-6">
            Создать аккаунт
          </h2>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Имя"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-red-500 text-xs mt-1 ml-1">errors.name</span>
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Фамилия"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-red-500 text-xs mt-1 ml-1">
              errors.surname
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-red-500 text-xs mt-1 ml-1">errors.email</span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Пароль"
                className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <span className="text-red-500 text-xs mt-1 ml-1">
              errors.password
            </span>
            <div className="text-xs text-gray-500 mt-1 ml-1">
              Пароль должен содержать минимум 8 символов
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Пароль"
                className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            <span className="text-red-500 text-xs mt-1 ml-1">
              errors.confirmPassword
            </span>
          </div>

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
