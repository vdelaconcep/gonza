import Primario from "@/components/botones/primario";
import Secundario from "@/components/botones/secundario";
import Secundariov2 from "@/components/botones/secundariov2";
import Secundariov3 from "@/components/botones/secundariov3";
import PrimarioAnimado from "@/components/botones/primarioAnimado";

const Botones = () => {
    return (
        <main className="bg-white flex-1 pt-16">
            <div className="flex flex-col items-center gap-3 p-10">
                <Primario />
            </div>
            <div className="flex flex-col items-center gap-3 p-10">
                <PrimarioAnimado />
            </div>
            <div className="flex justify-center p-10">
                <Secundario />
            </div>
            <div className="flex justify-center bg-black p-10">
                <Secundariov2 />
            </div>
            <div className="flex justify-center bg-black p-10">
                <Secundariov3 />
            </div>
            <div className="flex justify-center p-10">
                <Secundariov3 />
            </div>
            

            
        </main>
    );
};

export default Botones;