//Es el nucleo de mi proyecto
//une los componentes
import Header from "./componentes/Header";
import ListadoPaciente from "./componentes/ListadoPaciente";
import Formulario from "./componentes/Formulario";
import { useState} from 'react';
//import Paciente from "./componentes/Paciente";

//los estilos se meten con className en los archivos .jsx
function App() {
  const[pacientes, setPacientes]=useState([]);
  const[paciente, setPaciente]=useState({});
  const eliminarPaciente=id=>{
    const pacienteAct=pacientes.filter(paciente=>paciente.id!==id) 
    setPacientes(pacienteAct)
  }


  return (
    <div className="mt-20 container mx-auto">
      <Header />
      <div className="md:flex mt-10">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPaciente 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App;