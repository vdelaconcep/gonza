
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const ListaMobile = ({ items }) => {

    const [desplegado, setDesplegado] = useState("")

    return (
        <ul className="bg-black text-white font-mono font-medium w-[80vw] flex flex-col items-center rounded-br-xl border-b-2 border-r-2 border-black shadow-md shadow-gray-700 overflow-hidden">
            {items.map(item =>
                <li className="w-full text-center">
                    <button
                        className="py-5"
                        onClick={() => setDesplegado(desplegado === item.titulo ? "" : item.titulo)}>
                        {item.titulo}
                    </button>
                    <AnimatePresence>
                        {desplegado === item.titulo &&
                            <motion.ul
                                className="bg-white text-black w-full"
                                initial={{ height: 0, opacity: 0}}
                                animate={{ height: 'auto', opacity: 1}}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                                {item.subItems.map(subItem =>
                                    <li
                                        key={subItem.titulo_subItem}
                                        className="py-4 active:bg-red-700 hover:bg-red-700 w-full text-center">
                                        {subItem.titulo_subItem}
                                    </li>
                                )}
                            </motion.ul>
                        }
                    </AnimatePresence>
                    
                </li>
            )}
        </ul>
    );
};

export default ListaMobile;