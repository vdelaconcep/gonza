import { motion } from "framer-motion";

const PrimarioAnimado = ({ texto, accion }) => {

    return (
        <div className="relative flex justify-center p-0">
            <motion.button
                className="bg-red-700 text-white whitespace-nowrap font-mono font-semibold px-5 py-2 rounded-full border-2 border-black absolute bottom-0 left-0 z-20"
                onClick={accion}
                whileTap={{x: '4px', y: '5px'}}>
                {texto ? texto : 'Primario animado'}
            </motion.button>
            <button
                className="bg-black text-black whitespace-nowrap font-mono font-semibold px-5 py-2 rounded-full border-2 border-black absolute -bottom-1.5 left-1 z-10"
                onClick={accion}>
                {texto ? texto : 'Primario animado'}
            </button>
        </div>
        
    );
};

export default PrimarioAnimado;