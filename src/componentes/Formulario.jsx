import { useState, useEffect } from 'react'
import Error from './Error';

function Formulario() {
  const [mascota, setmascota] = useState('');
  const [propietario, setpropietario] = useState('');
  const [email, setemail] = useState('');
  const [alta, setalta] = useState('');
  const [sintomas, setsintomas] = useState('');
  const [error,setError]= useState(false)
  
  const validarFormulario= (e)=>{ e.preventDefault()
  if([mascota, propietario, alta, sintomas, email].includes('')){
    console.log('hay al menos un campo vacio')
    setError(true)
    return
  }; 
  setError(false)
  //limpiando nuestros campos o inputs
  setmascota('')
  setpropietario('')
  setemail('')
  setalta('')
  setsintomas('')

  };

  return (
    <div className="md:w-1/2 mx-5 lg:w-2/5 col-auto">
      <h2 className="text-center font-black text-3xl mb-5">Seguimiento Pacientes</h2>
      <p className="text-center mt-5 text-lg mb-10 ">Añade Pacientes <span className="text-indigo-600 font-bold   ">Administrarlos</span></p>

      <form className="bg-slate-300 py-10 px-8 shadow-md rounded-lg" 
      onSubmit={validarFormulario}>
        <div>
          {
            error&&<Error>
              <p>Todos los campos son obligatorios</p></Error>
          }
          <div>
            <label className="block text-gray-700 uppercase font-bold ">Nombre Mascota</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
              type="text"
              placeholder=" Nombre de la Mascota"
              value={mascota}
              onChange={(e)=>setmascota(e.target.value) }
            />
          </div>
          <div>
            <label className="block text-gray-700 uppercase font-bold mt-2">Nombre Propietario</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
              type="text"
              placeholder=" Nombre del Propietario"
              value={propietario}
              onChange={(e)=>setpropietario(e.target.value) }
            />
          </div>
          <div>
            <label className="block text-gray-700 uppercase font-bold mt-2">Email</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
              type="text"
              placeholder=" Email"
              value={email}
              onChange={(e)=>setemail(e.target.value) }
            />
          </div>
          <div>
            <label className="block text-gray-700 uppercase font-bold mt-2">Alta</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
              type="text"
              placeholder=" Alta"
              value={alta}
              onChange={(e)=>setalta(e.target.value) }
            />
          </div>
          <div>
            <label className="block text-gray-700 uppercase font-bold mt-2">Sintomas</label>
            <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500"
              type="text"
              placeholder=" Sintomas"
              value={sintomas}
              onChange={(e)=>setsintomas(e.target.value) }
            />
          </div>
        </div>
        <input type="submit" className='bg-indigo-600 text-white uppercase w-full p-3 mt-5 rounded-md hover:bg-indigo-700 cursor-pointer transition-colors' />
      </form >

    </div >
  );
}
export default Formulario;