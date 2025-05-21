import { CloudSun, Moon, Sun } from "lucide-react";
import { ScheduleSection } from "./schedule/schedule-section";
import { useAttendances } from "./schedule/hooks/use-attendances";
import { filterAttendancesByHourRange } from "../../../utils/date";

export function Schedule() {
  const { attendances, loading } = useAttendances();

  if (loading) return <p className="text-white">Carregando...</p>;

  return (
    <div className="mx-auto mt-3 w-full max-w-[55rem] px-5 py-3">
      <header className="mt-1 mb-3 flex flex-row items-center justify-between">
        <div>
          <h1 className="text-xl text-white">Agendamentos</h1>
          <span className="text-gray-400">Aqui você pode consultar seus atendimentos diários</span>
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
