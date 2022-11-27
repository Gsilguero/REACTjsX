
///Esto pertenece al COMPONENTE boton para darle atributos y color y estilo etc.
import "./button.CSS"; 


function button() {
    const ESTILOBOTON = {
        padding: "1rem",
        backgroung: "yellow",

    };

return (
    <button className="mi-boton" style={ESTILOBOTON}> BOTONCLICK </button>
);

}

export default button;
