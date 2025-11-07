import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navegacion from "@/components/navegacion/navegacion";

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div className="bg-black min-h-dvh flex flex-col">
            {!isHome && <Navegacion />}
            <div className="flex-1 flex flex-col">
                <Outlet />
            </div>
            
        </div>
    );
};

export default Layout;