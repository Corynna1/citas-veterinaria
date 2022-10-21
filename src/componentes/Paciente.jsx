

function Paciente({paciente, eliminarPaciente, setPaciente}){
    const{mascota,propietario,email,alta,sintomas}=paciente
    const eliminarFormulario=()=>{const respuesta=confirm('Estas segura de eliminar el paciente?')
    if(respuesta){
        eliminarPaciente(id)
    }}
    return(
        <div className="bg-slate-300 shadow-md     px-5 mx-5 rounded-md ">
            <p className=" font-bold text-gray-700 uppercase">Nombre-Mascota: <span className="font-normal normal-case ">{mascota}</span></p>
            <p className=" font-bold text-gray-700 uppercase">Propietario: <span className="font-normal normal-case ">{propietario}</span></p>
            <p className=" font-bold text-gray-700 uppercase">Email: <span className="font-normal normal-case ">{email}</span></p>
            <p className=" font-bold text-gray-700 uppercase">Alta: <span className="font-normal normal-case ">{alta}</span></p>
            <p className=" font-bold text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case ">{sintomas}</span></p>
            <div className="flex justify-between mt-10 "> <button 
            type="button "
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 uppercase rounded-lg"
            onClick={()=>setPaciente(paciente)}> 
            Editar</button>
            <button 
            type="button "
            className="bg-red-600 hover:bg-red-700 text-white px-10 uppercase rounded-lg"
            onClick={eliminarFormulario}> 
            Eliminar</button>
             </div>
        </div>
    )
}
export default Paciente