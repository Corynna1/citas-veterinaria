//Es el nucleo de mi proyecto
//une los componentes
import Header from "./componentes/Header";
import ListadoPaciente from "./componentes/ListadoPaciente";
import Formulario from "./componentes/Formulario";
//import Error from "./componentes/Error";
//import Paciente from "./componentes/Paciente";
//los estilos se meten con className en los archivos .jsx
function App() {
  return (
    <div className="mt-20">
      <Header />
      <Formulario/>
      <ListadoPaciente/>
    </div>
  )
}

export default App;