import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-black/45 backdrop-blur-sm z-0" />

      <div className="relative z-10 pt-40 flex flex-col items-center">
        <form className="shadow-2xl w-[400px] flex flex-col gap-6 p-8 rounded-3xl bg-white max-[400px]:w-full">
          <h2 className="text-3xl font-bold text-cast-gray text-center mb-6">
            С возвращением!
          </h2>
          <div className="flex flex-col gap-1">
            <input
              type="text"
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
            <span className="text-red-500 text-xs mt-1 ml-1">errors.email</span>
            <a
              href="/forgot-password"
              className="text-left text-sm text-blue-600 hover:underline mt-1 ml-1"
            >
              Забыли пароль?
            </a>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
          >
            Войти
          </button>

          <div className="text-center mt-4 text-sm">
            <span className="text-gray-600">Ещё нет аккаунта? </span>
            <Link
              to="/register"
              className="text-blue-600 hover:underline hover:text-blue-800"
            >
              Зарегистрироваться
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

export default LoginPage;
