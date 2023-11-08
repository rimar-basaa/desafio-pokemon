import Detalles from "../components/Detalles";
import Selector from "../components/Selector";
import { useParams } from "react-router-dom";

const Pokemones = () => {

    const {nombre} = useParams();
    if (nombre == null) {
        return <Selector />
    } else {
        return <Detalles />
    };
};

export default Pokemones;