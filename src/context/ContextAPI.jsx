import { createContext, useState, useEffect } from "react";

export const ContextAPI = createContext();

const ProviderAPI = ({ children}) => {

    const [nombre, setNombre] = useState("");
    const [pokenamesApi, setPokenamesApi] = useState([]);
    const [dataApi, setDataApi] = useState({});

// traer nombres de API ---------------------------------
    const consultarNombre = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/`;
        const res = await fetch(url);
        const data = await res.json();
        setPokenamesApi(data.results);        
    };
    useEffect(() => {
        consultarNombre()
    }, []); 

// traer data de pokemon ---------------------------------
    const consultarAPI = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/`;
        const res = await fetch(url + nombre);
        const data = await res.json();
        setDataApi(data);
    };
    useEffect(() => {
        consultarAPI()
    }, [nombre]);

    return (
        <ContextAPI.Provider 
            value={{ nombre, setNombre, pokenamesApi, setPokenamesApi, dataApi, setDataApi }}>
            {children}
        </ContextAPI.Provider>
    );
};

export default ProviderAPI;