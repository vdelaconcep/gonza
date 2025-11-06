import { Outlet } from "react-router-dom";
import Navegacion from "@/components/navegacion/navegacion";

const Layout = () => {
    return (
        <div className="bg-black min-h-dvh flex flex-col">
            <Navegacion />
            <div className="flex-1 flex flex-col">
                <Outlet />
            </div>
            
        </div>
    );
};

export default Layout;