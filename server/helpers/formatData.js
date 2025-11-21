const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();

  // Приводим даты к началу дня (убираем время)
  const dateStart = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const nowStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Разница в днях
  const diffTime = Math.abs(nowStart.getTime() - dateStart.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Сегодня";
  } else if (diffDays === 1) {
    return "Вчера";
  } else if (diffDays <= 7) {
    return `${diffDays} дня назад`;
  } else {
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
    });
  }
};

module.exports = formatDate;
