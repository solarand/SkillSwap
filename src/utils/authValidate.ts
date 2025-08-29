/* eslint-disable no-useless-escape */
class authValidate {
  validatePassword(password: string) {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
      password
    );

    if (!minLength) return "Минимум 8 символов";
    if (!hasUpperCase) return "Добавьте заглавную букву";
    if (!hasLowerCase) return "Добавьте строчную букву";
    if (!hasNumbers) return "Добавьте цифру";
    if (!hasSpecialChar) return "Добавьте специальный символ";
    return true;
  }

  validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Неверный формат email";
    return true;
  }

  validateName(name: string, fieldName: string) {
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
    if (!name) return `Введите ${fieldName}`;
    if (name.length < 2)
      return `${fieldName} должно содержать минимум 2 символа`;
    if (!nameRegex.test(name))
      return `${fieldName} должна содержать только буквы`;
    return true;
  }

  validateFirstName(firstName: string) {
    return this.validateName(firstName, "Имя");
  }

  validateLastName(lastName: string) {
    return this.validateName(lastName, "Фамилия");
  }

  validateConfirmPassword(
    password: string,
    confirmPassword: string | undefined
  ) {
    if (password !== confirmPassword) return "Пароли не совпадают";
    return true;
  }
}

export default new authValidate();
