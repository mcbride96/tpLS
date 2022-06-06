import '../assets/css/listaWords.css';
import { palavras } from "../data";

function ListaWords() {
    return (
        <div className="listaWords-container">
            <h3>Lista de Palavras</h3>
            <ul>
                {palavras.map((data, key) => {
                    return (
                        <li key={key}>{data.value}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListaWords;