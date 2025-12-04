
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";

const ListaMobile = ({ items, setAbierto }) => {

    const [desplegado, setDesplegado] = useState("")

    return (
        <ul className="bg-black text-white font-mono font-medium w-[80vw] flex flex-col items-center rounded-br-xl border-b-2 border-r-2 border-black shadow-md shadow-gray-700 overflow-hidden">
            {items.map((item, index) =>
                <li
                    key={`ItemNav-${index}`}
                    className="w-full text-center">
                    <button
                        className="py-5 cursor-pointer w-full h-full"
                        onClick={() => {
                            item.subItems.length !== 0 &&
                            setDesplegado(desplegado === item.titulo ? "" : item.titulo);
                        }}>
                        {item.subItems.length === 0 ?
                            <Link
                                className="block w-full h-full"
                                to={item.vinculo}
                                onClick={()=>setAbierto(false)}>{item.titulo}</Link> :
                            item.titulo}
                    </button>
                    <AnimatePresence>
                        {desplegado === item.titulo &&
                            <motion.ul
                                className="bg-white text-black w-full"
                                initial={{ height: 0, opacity: 0}}
                                animate={{ height: 'auto', opacity: 1}}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                                {item.subItems.map((subItem, index) =>
                                    <li
                                        key={`SubitemNav-${index}`}
                                        className="py-4 active:bg-red-700 hover:bg-red-700 w-full text-center flex justify-center cursor-pointer"
                                    >
                                        <Link
                                            className="w-full h-full"
                                            to={subItem.vinculo}
                                            onClick={()=> setAbierto(false)}>{subItem.titulo_subItem}</Link>
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