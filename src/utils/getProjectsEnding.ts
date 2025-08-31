export function getProjectsEnding(count: number): string {
  if (!count) {
    return "0 завершенных обменов";
  }
  if (count % 10 === 1) {
    return `${count} завершенный обмен`;
  } else if (count % 10 === 2 || count % 10 === 3 || count % 10 === 4) {
    return `${count} завершенных обмена`;
  } else {
    return `${count} завершенных обменов`;
  }
}
