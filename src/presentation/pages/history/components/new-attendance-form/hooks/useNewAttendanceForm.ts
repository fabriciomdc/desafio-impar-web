import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../../../../../lib/api/axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

const claimNewAttendanceFormSchema = z.object({
  name: z.string(),
  phone: z.string(),
  address: z.string(),
  description: z.string()
});

type ClaimNewAttendanceFormData = z.infer<typeof claimNewAttendanceFormSchema>;

export const useNewAttendanceForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<ClaimNewAttendanceFormData>({
    resolver: zodResolver(claimNewAttendanceFormSchema)
  });

  const handleNewAttendance = async (data: ClaimNewAttendanceFormData) => {
    setLoading(true);
    try {
      const response = await api.post("attendance", data);
      console.log("Resposta da API:", response.data);
      toast.success("Atendimento agendado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast.error("Erro ao agendar atendimento. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    watch,
    handleNewAttendance,
    loading
  };
};
