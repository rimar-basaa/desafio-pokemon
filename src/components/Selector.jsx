import { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import { useNavigate } from "react-router-dom";

const Selector = () => {

    const { nombre, setNombre, pokenamesApi } = useContext(ContextAPI);
    const navigate = useNavigate();

    const verDetalles = () => {        
        if (nombre == "") {
            alert("Debes seleccionar un Pokemon...")
        } else {
            navigate(`/pokemones/${nombre}`)
        };        
    };

    return (
        <div className="square box">
            <h1>Selecciona un Pokemon</h1>
            <select name="select" 
                    className="in" 
                    value={nombre} 
                    onChange={(event) => setNombre( event.target.value)}>
                <option value="">Seleccion...</option>
                {
                    pokenamesApi.map(pokename => (
                        <option key={pokename.name} value={pokename.name}>{pokename.name}</option>
                    ))
                }                
            </select>
            <button onClick={verDetalles} className="btn in">Ver detalles</button>
        </div>
    );
};

export default Selector;