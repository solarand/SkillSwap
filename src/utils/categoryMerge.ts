export function categoryMerge(cat: string[]) {
  const newCategory = [{ value: "", label: "Выберите категорию" }];
  cat.forEach((el) => newCategory.push({ value: el, label: el }));
  return newCategory;
}
