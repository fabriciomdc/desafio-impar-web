export function getTodayAsDateString() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

export function filterAttendancesByHourRange(attendances: any[], startHour: number, endHour: number) {
  return attendances.filter((a) => {
    const hour = new Date(a.createdAt).getHours();
    return hour >= startHour && hour < endHour;
  });
}
