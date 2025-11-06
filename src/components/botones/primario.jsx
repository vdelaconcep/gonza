const Primario = ({ texto, accion }) => {
    return (
        <button
            className="bg-red-700 text-white font-mono font-semibold px-5 py-2 rounded-full shadow-[5px_5px_0px_rgba(0,0,0,1)] border-2 border-black"
            onClick={accion}>
            {texto ? texto : 'Botón Primario'}
        </button>
    );
};

export default Primario;