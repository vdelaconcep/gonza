const Secundariov3 = ({ texto, accion }) => {
    return (
        <button
            className="bg-black text-red-700 font-medium font-mono px-5 py-2 rounded-full shadow-[5px_5px_0px_rgba(193,0,7,1)] border-2 border-red-700"
            onClick={accion}>
            {texto ? texto : 'Botón Sec. v3'}
        </button>
    );
};

export default Secundariov3;