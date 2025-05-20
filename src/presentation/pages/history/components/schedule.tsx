import { useState } from "react";
import { CloudSun, Moon, Sun } from "lucide-react";
import { ScheduleSection } from "./schedule/schedule-section";
import { useAttendances } from "./schedule/hooks/use-attendances";
import { filterAttendancesByHourRange, getTodayAsDateString } from "../../../utils/date";

export function Schedule() {
  const [selectedDate, setSelectedDate] = useState(getTodayAsDateString());
  const { attendances, loading } = useAttendances(selectedDate);

  if (loading) return <p className="text-white">Carregando...</p>;

  return (
    <div className="mx-auto mt-3 w-full max-w-[55rem] px-5 py-3">
      <header className="mt-1 mb-3 flex flex-row items-center justify-between">
        <div>
          <h1 className="text-xl text-white">Agendamentos</h1>
          <span className="text-gray-400">Aqui você pode consultar seus atendimentos diários</span>
        </div>

        <div className="flex h-12 w-fit items-center gap-[0.625rem] rounded-lg px-3 outline outline-gray-300 focus-within:outline-emerald-600 hover:outline-gray-400">
          <input
            type="date"
            required
            className="w-full text-white bg-transparent focus:outline-none"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </header>

      <main className="mt-8 grid gap-[0.875rem] [&>*:last-child]:mb-[6.25rem]">
        <ScheduleSection
          title="Manhã"
          icon={<Sun className="text-yellow-300" />}
          timeRange="08h-12h"
          attendances={filterAttendancesByHourRange(attendances, 8, 12)}
        />
        <ScheduleSection
          title="Tarde"
          icon={<CloudSun className="text-yellow-500" />}
          timeRange="13h-17h"
          attendances={filterAttendancesByHourRange(attendances, 13, 17)}
        />
        <ScheduleSection
          title="Noite"
          icon={<Moon className="text-white" />}
          timeRange="18h-00"
          attendances={filterAttendancesByHourRange(attendances, 18, 24)}
        />
      </main>
    </div>
  );
}
