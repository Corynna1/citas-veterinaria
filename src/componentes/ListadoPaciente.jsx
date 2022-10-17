import Paciente from "./Paciente"


function ListadoPaciente(){


    return(
        <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen">
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
            <p className="text-xl mb-10 mt-5 text-center"><span className="text-indigo-600 font-bold ">Pacientes/Citas</span>{""}</p>
            <Paciente/>
        </div>
    )
}
export default ListadoPaciente