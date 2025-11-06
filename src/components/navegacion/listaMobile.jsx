
import { useState } from "react";

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
                    {desplegado === item.titulo &&
                        <ul className="bg-white text-black w-full">
                            {item.subItems.map(subItem =>
                                <li
                                    key={subItem.titulo_subItem}
                                    className="py-4 active:bg-red-700 hover:bg-red-700 w-full text-center">
                                    {subItem.titulo_subItem}
                                </li>
                            )}
                        </ul>
                    }
                </li>
            )}
        </ul>
    );
};

export default ListaMobile;