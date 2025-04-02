import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cta = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-white dark:bg-gray-900 py-16 px-6">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    Unlock Your Potential with Skill Bridge 🚀
                </h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                    Gain in-demand skills, track your progress, and learn from top educators—all in one platform. <br /> Start your learning journey today and take a step toward success!
                </p>
                <div className="mt-6">
                    <div
                        onClick={() => navigate(`/course/search?query=`)}
                        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition-all cursor-pointer"
                    >
                        Start Learning Today
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
