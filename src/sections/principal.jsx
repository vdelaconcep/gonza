import Primario from '@/components/botones/primario';

const Principal = () => {

    return (
        <main className="flex-1 bg-white text-blackmin-h-dvh pt-16">
            <div className='p-2'>
                <h1 className='text-5xl pollerOne my-5text-center'>
                    Home
                </h1>
                <p className='font-mono'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sunt velit exercitationem explicabo eos facere cupiditate fugit laudantium cum voluptatibus cumque, fugiat nihil impedit ab, accusamus voluptas suscipit sed quam?
                </p>
                <article className='my-10 flexjustify-end pr-5'>
                    <Primario texto='Ver catálogo' />
                </article>
            </div>
            
        </main>
    );
};

export default Principal;