import { useEffect, useState } from "react";
import type { Attendance } from "../../../../../../dtos/attendance";
import { api } from "../../../../../../lib/api/axios";

export function useAttendances() {
  const [attendances, setAttendances] = useState<Attendance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAttendances() {
      try {
        const response = await api.get("/attendance");

        const data: Attendance[] = response.data.map((a: any) => ({
          ...a,
          createdAt: new Date(a.createdat),
        }));

        setAttendances(data);
      } catch (error) {
        console.error("Erro ao buscar atendimentos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAttendances();
  }, []);

  return { attendances, loading };
}
