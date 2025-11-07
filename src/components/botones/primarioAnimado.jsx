import { motion } from "framer-motion";

const PrimarioAnimado = ({ texto, accion }) => {

    return (
        <div className="relative w-8 h-8">
            <motion.button
                className="bg-linear-to-t from-red-800 to-red-500 text-white whitespace-nowrap font-mono font-semibold px-5 py-2 rounded-full border-2 border-black absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
                onClick={accion}
                whileTap={{y: '5px'}}>
                {texto ? texto : 'Primario animado'}
            </motion.button>
            <button
                className="bg-black text-black whitespace-nowrap font-mono font-semibold px-5 py-2 rounded-full border-2 border-black absolute -bottom-1.5 left-1/2 -translate-x-1/2 z-10"
                onClick={accion}>
                {texto ? texto : 'Primario animado'}
            </button>
        </div>
        
    );
};

export default PrimarioAnimado;