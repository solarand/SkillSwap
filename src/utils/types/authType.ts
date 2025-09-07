import type { UseFormRegister } from "react-hook-form";
import type { IUser } from "./profileType";

export interface InputFieldProps {
  nameField: "name" | "surname" | "email" | "password" | "confirmPassword";
  type?: string;
  placeholder: string;
  register: UseFormRegister<RegisterFormValues>;
  watch: (name: string) => string | undefined;
  required?: boolean;
  error?: string;
  autoComplete?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export interface RegisterFormValues {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IFormField {
  nameField: "name" | "surname" | "email" | "password" | "confirmPassword";
  type: string;
  placeholder: string;
  required: boolean;
  autoComplete: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface ServerError {
  status: number;
  data: {
    message: string;
    errors: [];
  };
}
