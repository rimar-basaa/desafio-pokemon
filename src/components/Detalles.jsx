import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";

const Detalles = () => {

    const { dataApi } = useContext(ContextAPI);    
    const tipos = (dataApi.types)

    const { nombre } = useParams();    
    const titulo = nombre.substring(0, 1).toUpperCase() + nombre.substring(1).toLowerCase(); 

    return (
        <>
        <div className="detalles box square">
            <div className="info-container"> 
                <h2 className="clrGld">{titulo}</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Altura</td>
                            <td>{dataApi.height}</td>
                        </tr>
                        <tr>
                            <td>Peso</td>
                            <td>{dataApi.weight}</td>
                        </tr>
                        <tr>
                            <td>Fuerza</td>
                            <td>{dataApi.stats[0].base_stat}</td>
                        </tr>
                        <tr>
                            <td>Ataque</td>
                            <td>{dataApi.stats[1].base_stat}</td>
                        </tr>
                        <tr>
                            <td>Defensa</td>
                            <td>{dataApi.stats[2].base_stat}</td>
                        </tr>
                        <tr>
                            <td>Ataque Especial</td>
                            <td>{dataApi.stats[3].base_stat}</td>
                        </tr>
                        <tr>
                            <td>Defensa Especial</td>
                            <td>{dataApi.stats[4].base_stat}</td>
                        </tr>
                        <tr>
                            <td>Velocidad</td>
                            <td>{dataApi.stats[5].base_stat}</td>
                        </tr>                        
                    </tbody>
                </table>
                <h4 className="clrGld">Tipografia</h4>
                <table>
                    <tbody>
                        <tr className="tipos">
                            {
                                tipos.map(tipo => (
                                    <td key={tipo.type.name}>{tipo.type.name.substring(0, 1).toUpperCase() + tipo.type.name.substring(1).toLowerCase()}</td>  
                                ))
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pic-container">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${dataApi.id}.svg`} alt={dataApi.name} />            
            </div>            
        </div>        
        <Link className="link" to="/pokemones">
            <button className="in btn">Seleccionar otro</button>
        </Link>        
        </>
    );
};

export default Detalles;