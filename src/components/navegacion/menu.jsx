import { motion } from "framer-motion"

const Menu = ({ abierto, setAbierto }) => {
    return (
        <button
            onClick={() => setAbierto(!abierto)}
            className="text-white text-2xl text-shadow-[3px_3px_0px_rgba(193,0,7,1)] bg-black relative w-16 h-16"
            aria-label="toggle-menu">
            <motion.i
                className="fa-solid fa-bars absolute top-1/2 -translate-y-1/2 right-1/2"
                animate={{
                    rotate: abierto ? 90 : 0,
                    opacity: abierto ? 0 : 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }} />
            
            <motion.i
                className="fa-solid fa-x absolute top-1/2 -translate-y-1/2 right-1/2"
                animate={{
                    rotate: abierto ? 0 : -90,
                    opacity: abierto ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }} />

        </button>
    );
};

export default Menu;