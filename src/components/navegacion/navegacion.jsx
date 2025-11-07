import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";
import Menu from "@/components/navegacion/menu";
import ListaMobile from "@/components/navegacion/listaMobile";

const Navegacion = () => {

    const [abierto, setAbierto] = useState(false);

    const items = [
        {
            titulo: "Item principal 1",
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
        <nav className="bg-black px-2 text-white flex items-center relative">
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