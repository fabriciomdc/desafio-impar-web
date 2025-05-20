import { X } from "lucide-react"
import { useEffect } from "react"
import { NewAttendanceForm } from "../new-attendance-form"

interface NewAttendanceModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewAttendanceModal({ isOpen, onClose }: NewAttendanceModalProps) {
  // Fechar no ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="relative z-10 w-full max-w-xl animate-fadeInScale rounded-xl bg-[#14141D] p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 text-gray-400 transition hover:text-gray-200"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <NewAttendanceForm />
      </div>
    </div>
  )
}
