export function calendarDatesToShow() {
  const today = new Date();
  return {
    today,
    yesterday: new Date(new Date().setDate(today.getDate() - 1)),
    tomorrow: new Date(new Date().setDate(today.getDate() + 1)),
  };
}
