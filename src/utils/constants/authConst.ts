import type { IFormField } from "../types/authType";

export const authFormFields: IFormField[] = [
  {
    nameField: "name",
    type: "text",
    placeholder: "Имя",
    required: true,
    autoComplete: "off",
  },
  {
    nameField: "surname",
    type: "text",
    placeholder: "Фамилия",
    required: true,
    autoComplete: "off",
  },
  {
    nameField: "email",
    type: "text",
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
    nameField: "password",
    type: "password",
    placeholder: "Пароль",
    required: true,
    autoComplete: "new-password",
  },
  {
    nameField: "confirmPassword",
    type: "password",
    placeholder: "Подтвердите пароль",
    required: true,
    autoComplete: "new-password",
  },
];
