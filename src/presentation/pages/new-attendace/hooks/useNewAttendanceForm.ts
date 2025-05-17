import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const claimNewAttendanceFormSchema = z.object({
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    description: z.string()
})

type ClaimNewAttendanceFormData = z.infer<typeof claimNewAttendanceFormSchema>

export const useNewAttendanceForm = () => {
    const {register, watch, handleSubmit, formState: {errors}} = useForm<ClaimNewAttendanceFormData>({resolver: zodResolver(claimNewAttendanceFormSchema)})

    const handleNewAttendance = (data: ClaimNewAttendanceFormData) => {
        return console.log(data) 
    }

    return {register, handleSubmit, errors, watch, handleNewAttendance}
}