export const pluralize = (
  count: number,
  one: string,
  few: string,
  many: string
): string => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${count} ${many}`;
  }

  if (lastDigit === 1) {
    return `${count} ${one}`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${count} ${few}`;
  }

  return `${count} ${many}`;
};

export const getReviewsText = (count: number): string =>
  pluralize(count, "отзыв", "отзыва", "отзывов");

export const getDaysText = (count: number): string =>
  pluralize(count, "день", "дня", "дней");

export const getVariantsText = (count: number): string =>
  pluralize(count, "вариант", "варианта", "вариантов");
