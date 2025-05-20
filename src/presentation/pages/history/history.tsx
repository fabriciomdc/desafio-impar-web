import { useState } from "react";
import { Schedule } from "./components/schedule";
import { NewAttendanceModal } from "./components/new-attendance-form/components/new-attendance-modal";

export function History() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#14141D]">
      <div className="h-32 w-full" />

      <Schedule />
      
      <NewAttendanceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <footer className="fixed right-0 bottom-0 mr-8 mb-10">
        <button
          onClick={() => setModalOpen(true)}
          className="rounded-md bg-emerald-600 px-4 py-3 text-white transition hover:bg-emerald-700"
        >
          NOVO AGENDAMENTO
        </button>
      </footer>
    </div>
  );
}
