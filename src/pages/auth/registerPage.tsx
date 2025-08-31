/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { InputField } from "@/components/ui/input/InputField";
import type { RegisterFormValues } from "@/utils/types/authType";
import { authFormFields } from "@/utils/constants/authConst";
import { useRegistrationMutation } from "@/api/authApi";
import { useAppDispatch } from "@/hooks/redux";
import { registrationAction } from "@/store/slices/userSlice";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormValues>();

  const [regisration] = useRegistrationMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormValues> = async (formValues) => {
    delete formValues.confirmPassword;

    try {
      const result = await regisration(formValues);
      if (result.data) dispatch(registrationAction(result.data));
      await navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

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

          {authFormFields.map((el) => (
            <InputField
              key={el.nameField}
              {...el}
              register={register}
              error={errors[el.nameField]?.message}
              watch={watch}
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
