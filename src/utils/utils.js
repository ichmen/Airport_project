//@param {Date|date}
export function formatDate(date) {
  date = new Date(date);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
export function dateWithOffset(date) {
  // console.log(date);
  date = new Date(date);
  // console.log(date);
  const minsPerHour = 60;
  const timeOffset = date.getTimezoneOffset() / minsPerHour;
  // console.log(stimeOffset);
  const result = new Date(date.setHours(date.getHours()));
  // console.log(result);
  return result;
}

export function timeWithZero(date) {
  if (!date) {
    return;
  }
  const time = new Date(date);
  const hours = time.getHours();
  const minutes = String(time.getMinutes());
  return `${hours}:${minutes.length < 2 ? '0' + minutes : minutes}`;
}

export function setCalendarIconText(date) {
  const newDate = new Date(date);
  const day = String(newDate.getDate());
  const month = String(newDate.getMonth() + 1);
  return `${day.length < 2 ? '0' + day : day}/${month.length < 2 ? '0' + month : month}`;
}

export function isDatesEqual(date1, date2) {
  const newDate1 = new Date(date1);
  const newDate2 = new Date(date2);
  return (
    newDate1.getDate() === newDate2.getDate() &&
    newDate1.getMonth() === newDate2.getMonth() &&
    newDate1.getFullYear() === newDate2.getFullYear()
  );
}
