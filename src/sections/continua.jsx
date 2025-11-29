import '@/animations/continua.css'

const AnimacionContinua = () => {
    return (
        <div className='min-h-dvh w-full flex justify-center items-center overflow-hidden relative'>
            <article
                className={`h-0 w-0 border-b-20 border-b-red-700 border-l-12 border-l-transparent border-r-12 border-r-transparent growing absolute bottom-1/2 left-1/2 -translate-x-1/2`}>

            </article >
            <article 
            style={{animationDelay:'1s'}}
            className={`h-0 w-0 border-b-20 border-b-black border-l-12 border-l-transparent border-r-12 border-r-transparent growing absolute bottom-1/2 left-1/2 -translate-x-1/2`}>

            </article>
            <article
                style={{ animationDelay: '2s' }}
                className={`h-0 w-0 border-b-20 border-b-white border-l-12 border-l-transparent border-r-12 border-r-transparent growing absolute bottom-1/2 left-1/2 -translate-x-1/2`}>

            </article>
            <article
                style={{ animationDelay: '3s' }}
                className={`h-0 w-0 border-b-20 border-b-red-700 border-l-12 border-l-transparent border-r-12 border-r-transparent growing absolute bottom-1/2 left-1/2 -translate-x-1/2`}>

            </article >
            <article
                style={{ animationDelay: '4s' }}
                className={`h-0 w-0 border-b-20 border-b-black border-l-12 border-l-transparent border-r-12 border-r-transparent growing absolute bottom-1/2 left-1/2 -translate-x-1/2`}>

            </article>
            <article
                style={{ animationDelay: '5s' }}
                className={`h-0 w-0 border-b-20 border-b-white border-l-12 border-l-transparent border-r-12 border-r-transparent growing absolute bottom-1/2 left-1/2 -translate-x-1/2`}>

            </article>
            
        </div>
        
    );
};

export default AnimacionContinua;