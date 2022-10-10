export function calendarDatesToShow() {
  const today = new Date();
  const yesterday = new Date().setDate(today.getDate() - 1);
  const tomorrow = new Date().setDate(today.getDate() + 1);
  return {
    today: dateToDateMonth(today),
    yesterday: dateToDateMonth(yesterday),
    tomorrow: dateToDateMonth(tomorrow),
  };
}

function dateToDateMonth(date) {
  const month = String(new Date(date).getMonth() + 1);
  const day = String(new Date(date).getDate());
  return `${twoDigitString(day)}/${twoDigitString(month)}`;
}

function twoDigitString(num) {
  const numStr = String(num);
  return numStr.length < 2 ? '0' + numStr : numStr;
}
