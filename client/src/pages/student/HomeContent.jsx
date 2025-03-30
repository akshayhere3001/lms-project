import React from 'react'

const HomeContent = () => {
    return (

        <>
            <section className="">
                <div className="py-12 mt-6 bg-white dark:bg-inherit dark:text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        <div className="lg:text-center">
                            <h2
                                className="font-heading mb-4 bg-orange-100 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                                Why choose us?
                            </h2>
                            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                We know tech, we know development. We are developers.
                            </p>
                        </div>

                        <div className="my-14">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img className='dark:bg-white dark:rounded-lg' src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-white">Powerful API</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Unlock limitless learning opportunities with our intuitive LMS platform. Access expert-led courses and enhance your skills anytime, anywhere.
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img className='dark:bg-white dark:rounded-lg' src="https://www.svgrepo.com/show/503138/webpack.svg" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-white">Easy to integrate
                                            SDK
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500"> Stay ahead with interactive lessons, quizzes, and real-time progress tracking. Our platform ensures a seamless and engaging learning experience.
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img className='dark:bg-white dark:rounded-lg' src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-white">Low Transaction Cost
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500"> Join a thriving community of learners and educators collaborating for growth. Earn certifications that add value to your career and knowledge.
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div
                                            className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img className='dark:bg-white dark:rounded-lg' src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />

                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 dark:text-white">Powerful Dashboard
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500"> Whether you're a student or a professional, our LMS adapts to your learning needs. Start your journey today and transform the way you learn!
                                    </dd>
                                </div>
                            </dl>
                        </div>

                    </div>
                </div>
            </section>

            <div className="sm:flex items-center mx-auto max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://i.imgur.com/WbQnbas.png" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
                        </h2>
                        <p className="text-gray-700">
                            At Skill Bridge, we believe in the power of education. Our platform is designed to provide high-quality learning experiences, making education accessible, engaging, and effective for students and professionals alike.

                            Our mission is to bridge the gap between knowledge and learners by offering a seamless, tech-driven educational experience.
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HomeContent