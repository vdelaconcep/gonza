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
    ]

    return (
        <nav className="bg-black px-2 text-white flex items-center relative">
            <Menu abierto={abierto} setAbierto={setAbierto} />
            {abierto &&
                <article className="absolute top-16 left-0">
                    <ListaMobile items={items} />
                </article>
            }
        </nav>
    );
};

export default Navegacion;