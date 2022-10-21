import Paciente from "./Paciente"


function ListadoPaciente({pacientes, setPaciente}){


    return(
        <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen">
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
            <p className="text-xl mb-10 mt-5 text-center">Administra tus<span className="text-indigo-600 font-bold ">Pacientes/Citas</span>{""}</p>

            {pacientes.map(paciente=>(<Paciente
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}/> ))
            }
            <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl text-center mt-5">Comienza Agregar Pacientes <span className="text-indigo-600 font-bold"> y aparecera en este lugar</span></p>
            </>

        </div>
    )
}
export default ListadoPaciente;