const Secundariov2 = ({ texto, accion }) => {
    return (
        <button
            className="bg-black text-white font-medium font-mono px-5 py-2 rounded-full shadow-[5px_5px_0px_rgba(255,255,255,1)] border-2 border-white"
            onClick={accion}>
            {texto ? texto : 'Botón Sec. v2'}
        </button>
    );
};

export default Secundariov2;