import Typewriter from 'typewriter-effect';

export default function Hero() {
    return (
        <div className="pt-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <p className="uppercase tracking-loose w-full">What business are you?</p>
                    <h1 className="my-4 text-5xl font-bold leading-tight">
                        Software Solutions for Your
                        <Typewriter
                            options={{
                                strings: ['Startup Business.', 'Security Agency.', 'E-commerce Business.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className="leading-normal text-2xl mb-8">
                        Handcrafted Tailwind CSS template for your next - Startup, Business, Agency or SaaS Website. Comes with refreshing design and everything you need to kickstart your next web project.
                    </p>
                    <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Get Started
                    </button>
                </div>
                <div className="w-full md:w-3/5 py-6 text-center">
                    <img className="w-full md:w-4/5 z-50" src="hero.png" />
                </div>
            </div>
        </div>
    )
}
