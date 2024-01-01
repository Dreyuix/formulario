import NoControlado from "./components/NoControlado";

const App = () => {
  return (
   
  <form>
     <h1>Formulario ok</h1>
    <input type="" 
    placeholder=""
    className="form-control mb-2"
    name ="title"
    />

<textarea 
    className="form-control mb-2"  
    placeholder="Ingresa"
    name="descripcion"  
    >
</textarea>

<select className="form-select mb-2" name = "state" >
    <option value="pendiente">Pendiente</option>
    <option value="pendiente">Completado</option>
</select>

<button type="submit" className="btn btn-primary">
Procesar
</button>

  </form>

  )
} ;
export default App