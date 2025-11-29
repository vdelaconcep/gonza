import '@/animations/continua.css'

const AnimacionContinua = () => {
    return (
        <div className='min-h-dvh w-full flex justify-center items-center overflow-hidden relative'>
            <article
                style={{borderBottomColor: '#dc2626'}}
                className='center_triangle growing'>
            </article>
            
            <article
                style={{borderBottomColor: '#000000', animationDelay:'1s'}}
                className='center_triangle growing'>
            </article>

            <article
                style={{ borderBottomColor: '#FFFFFF', animationDelay: '2s' }}
                className='center_triangle growing'>
            </article>

            <article
                style={{ borderBottomColor: '#dc2626', animationDelay: '3s' }}
                className='center_triangle growing'>
            </article>

            <article
                style={{ borderBottomColor: '#000000', animationDelay: '4s' }}
                className='center_triangle growing'>
            </article>

            <article
                style={{ borderBottomColor: '#FFFFFF', animationDelay: '5s' }}
                className='center_triangle growing'>
            </article>
            
        </div>
        
    );
};

export default AnimacionContinua;