import { MonthsOfNumber } from "./constants/profileConst";

export function transformData(data: string) {
  const splitData = data.split("t")[0].split("-").slice(0, 2);
  return `${MonthsOfNumber[Number(splitData[1]) - 1]} ${splitData[0]}`;
}
