import { useNewAttendanceForm } from "../hooks/useNewAttendanceForm"

export function NewAttendanceForm() {
    const {handleSubmit, handleNewAttendance, register} = useNewAttendanceForm()
    return(
        <form onSubmit={handleSubmit(handleNewAttendance)} className="flex flex-col gap-5">
            <h1 className="mb-5">Novo Atendimento</h1>
            <div>
                <span>Nome</span>
                <input className="bg-green-500" {...register('name')}/>
            </div>
               <div>
                <span>Contato</span>
              <input className="bg-green-500" {...register('phone')}/>
            </div>
              <div>
                <span>Endereço</span>
            <input className="bg-green-500" {...register('address')}/>
            </div>
             <div>
                <span>Descrição</span>
                  <input className="bg-green-500" {...register('description')}/>
            </div>
            <button type="submit">Salvar</button>
        </form>
    )
}