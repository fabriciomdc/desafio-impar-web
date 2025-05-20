import { Loader, LocateIcon, Phone, User } from "lucide-react";
import { InputField } from "./components/input-field";
import { TextareaField } from "./components/text-area-field";
import { useNewAttendanceForm } from "./hooks/useNewAttendanceForm";

export function NewAttendanceForm() {
  const { register, handleSubmit, errors, handleNewAttendance, loading } =
    useNewAttendanceForm();

  return (
    <div className="relative mx-auto px-5 py-10">
      <div className="mb-7 flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">Novo Atendimento</h1>
        <span className="text-gray-400">
          Preencha os dados do cliente para realizar o agendamento:
        </span>
      </div>

      <form
        onSubmit={handleSubmit(handleNewAttendance)}
        className="flex h-full flex-col gap-4"
      >
        <InputField
          label="Nome do Paciente"
          placeholder="Rodolfo Granado"
          Icon={User}
          registration={register("name")}
          error={errors.name?.message}
        />

        <InputField
          label="Endereço"
          placeholder="Rua Exemplo, 123"
          Icon={LocateIcon}
          registration={register("address")}
          error={errors.address?.message}
        />

        <InputField
          label="Telefone"
          placeholder="(99) 99999-9999"
          Icon={Phone}
          registration={register("phone")}
          error={errors.phone?.message}
        />

        <TextareaField
          label="Descrição"
          placeholder="exemplo: febre, tontura e etc..."
          registration={register("description")}
          error={errors.description?.message}
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-4 flex items-center gap-2 self-end rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading && <Loader className="h-5 w-5 animate-spin" />}
          {loading ? "Agendando..." : "Agendar"}
        </button>
      </form>
    </div>
  );
}
