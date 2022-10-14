function Formulario() {
    return (
      <div className="md:w-1/2 mx-5 lg:w-2/5">
        <h2 className="text-center font-black text-3xl mb-5">Seguimiento Pacientes</h2>
        <p className="text-center mt-5 text-lg mb-10 ">Añade Pacientes <span className="text-indigo-600 font-bold   ">Administrarlos</span></p>
      
        <form className="bg-slate-300 py-10 px-8 shadow-md rounded-lg" >
          <div>
              <label className="block text-gray-700 uppercase font-bold ">Nombre Mascota</label>
              <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500" 
              type="text"
              placeholder=" Nombre de la Mascota"
              />
              
              <label className="block text-gray-700 uppercase font-bold mt-2">Nombre Propietario</label>
              <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500" 
              type="text"
              placeholder=" Nombre del Propietario"
              />
              <label className="block text-gray-700 uppercase font-bold mt-2">Email</label>
              <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500" 
              type="text"
              placeholder=" Email"
              />
              <label className="block text-gray-700 uppercase font-bold mt-2">Alta</label>
              <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500" 
              type="text"
              placeholder=" Alta"
              />
              <label className="block text-gray-700 uppercase font-bold mt-2">Sintomas</label>
              <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500" 
              type="text"
              placeholder=" Sintomas"
              />
  
  
          </div>
        </form>
  
      </div>
    );
  }
  export default Formulario;