import type { Attendance } from "../../../../../dtos/attendance";

interface ScheduleSectionProps {
  title: string;
  icon: React.ReactNode;
  timeRange: string;
  attendances: Attendance[];
}

export function ScheduleSection({
  title,
  icon,
  timeRange,
  attendances,
}: ScheduleSectionProps) {
  return (
    <section className="bg-background-tertiary rounded-[0.625rem] bg-[#23242C]">
      <header className="flex items-center gap-[0.75rem] border-b border-[#2E2C30] px-5 py-3">
        {icon}
        <h2 className="mr-auto text-white">{title}</h2>
        <span className="text-gray-400">{timeRange}</span>
      </header>

      <ul className="flex flex-col p-5">
        {attendances.map((attendance, index) => (
          <li
            key={index}
            className="flex items-start justify-between border-b border-[#2E2C30] py-3 last:border-b-0"
          >
            <div className="flex flex-col gap-1">
              <strong className="text-white">
                Horário de atendimento:{" "}
                {attendance.createdAt.toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </strong>
              <strong className="text-white">Nome: {attendance.name}</strong>
              {attendance.phone && (
                <span className="text-white">Telefone: {attendance.phone}</span>
              )}
              {attendance.address && (
                <span className="text-white">
                  Endereço: {attendance.address}
                </span>
              )}
              {attendance.description && (
                <span className="text-white">
                  Descrição: {attendance.description}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
