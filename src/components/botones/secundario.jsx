const Secundario = ({ texto, accion }) => {
    return (
        <button
            className="bg-white text-black font-medium font-mono px-5 py-2 rounded-full shadow-[5px_5px_0px_rgba(0,0,0,1)] border-2 border-black"
            onClick={accion}>
            {texto ? texto : 'Botón Secundario'}
        </button>
    );
};

export default Secundario;