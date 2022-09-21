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
  const time = new Date(date);
  const hours = time.getHours();
  const minutes = String(time.getMinutes());
  return `${hours}:${minutes.length < 2 ? '0' + minutes : minutes}`;
}
