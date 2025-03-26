import { Button } from '@/components/ui/button';
import React from 'react';

const AboutUs = () => {
    return (
        <section className="py-24 relative bg-white dark:bg-gray-900">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                            <h2 className="text-gray-900 dark:text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                Empowering Learning, Connecting Minds
                            </h2>
                            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                Skill Bridge is more than just a Learning Management System—it’s a bridge to endless possibilities.
                                We believe in **accessible, high-quality education** that transforms careers and unlocks potential.
                                Our platform fosters **collaborative learning, hands-on experiences, and expert-led courses**, ensuring
                                every learner is equipped for success in today's fast-evolving world.
                            </p>
                            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                Whether you're a **student, educator, or professional**, Skill Bridge provides the tools to **learn, grow, and excel.**
                                Join our thriving community and take your knowledge to the next level!
                            </p>
                        </div>

                        <Button
                            onClick={() => navigate(`/course/search?query=`)} // Corrected navigation path
                            className="bg-white text-orange-500 rounded-md hover:bg-gray-100 transition-colors duration-300"
                        >
                            Start Your Journey
                        </Button>
                    </div>
                    <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717751272.png" alt="About Us Image" />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
