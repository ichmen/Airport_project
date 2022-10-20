export function formatDate(date) {
  const newDate = new Date(date);
  return `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`;
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
