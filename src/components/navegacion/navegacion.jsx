import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Menu from "@/components/navegacion/menu";
import ListaMobile from "@/components/navegacion/listaMobile";

const Navegacion = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [abierto, setAbierto] = useState(false);

    const items = [
        {
            titulo: "UI Kit",
            subItems: [
                {
                    titulo_subItem: "Botones",
                    vinculo:"/botones"
                },
                {
                    titulo_subItem: "Item secundario",
                    vinculo:""
                },
                {
                    titulo_subItem: "Item secundario",
                    vinculo:""
                }
            ]
        },
        {
            titulo: "Item principal 2",
            subItems: [
                {
                    titulo_subItem: "Item secundario",
                    vinculo:""
                },
                {
                    titulo_subItem: "Item secundario",
                    vinculo:""
                },
                {
                    titulo_subItem: "Item secundario",
                    vinculo:""
                }
            ]
        },
        {
            titulo: "Item principal 3",
            subItems: [
                {
                    titulo_subItem: "Item secundario",
                    vinculo:""
                },
                {
                    titulo_subItem: "Item secundario",
                    vinculo:""
                },
                {
                    titulo_subItem: "Item secundario",
                    vinculo:""
                }
            ]
        },
        {
            titulo: "Item principal 4",
            subItems: [
                {
                    titulo_subItem: "Item secundario",
                    vinculo:""
                },
                {
                    titulo_subItem: "Item secundario",
                    vinculo:""
                },
                {
                    titulo_subItem: "Item secundario",
                    vinculo:""
                }
            ]
        }
    ]

    return (
        <nav className={`bg-black px-2 text-white flex items-center shadow-sm shadow-gray-700 relative ${isHome ? 'relative' : 'fixed top-0 left-0 right-0 z-50'}`}>
            <Menu abierto={abierto} setAbierto={setAbierto} />
            <AnimatePresence>
                {abierto ?
                    <motion.article
                        className="absolute top-16 left-0 z-100"
                        initial={{ x: '-100%'}}
                        animate={{ x: 0}}
                        exit={{ x: '-100%'}}
                    transition={{duration:0.3, ease:'easeInOut'}}>
                        <ListaMobile items={items} />
                    </motion.article>
                : null}
            </AnimatePresence>
        </nav>
    );
};

export default Navegacion;