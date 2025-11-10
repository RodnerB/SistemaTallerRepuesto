import { ExitIcon } from "../assets/Icons.jsx";
export default function Salir({closeModal}){
    return(
        <button className="btn-salir" onClick={closeModal} type="button">
            <ExitIcon />
        </button>
    )    
}