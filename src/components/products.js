export default function Products() {
    return (
        <section className="bg-white">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    How we do it
                </h2>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="text-gray-800 text-base px-6 mb-5">
                            We keep on building your data as you fill up more forms. You will spend less and less time filling up forms as your data becomes more complete
                            </p>
                        </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-start">
                            <button className="mx-auto lg:mx-0 hover:underline gradient font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                Action
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="text-gray-800 text-base px-6 mb-5">
                            We keep a database of forms and keep adding to it as we discover more so no more surfing the internet just to find forms
                            </p>
                        </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-center">
                            <button className="mx-auto lg:mx-0 hover:underline gradient font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                Action
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="text-gray-800 text-base px-6 mb-5">
                            We keep a history of forms that you have filled up and give you access to that history
                            </p>
                        </a>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                        <div className="flex items-center justify-end">
                            <button className="mx-auto lg:mx-0 hover:underline gradient font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
