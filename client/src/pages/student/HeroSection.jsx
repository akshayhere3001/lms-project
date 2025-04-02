import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../../assets/bg-img.avif"; // Ensure the correct import

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search?query=${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <div
      className="relative py-24 px-4 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-3xl mx-auto  p-8">
        <h1 className="text-white text-4xl font-bold mb-4">
          📚 Empower Learning with Ease – Your Ultimate LMS Solution!
        </h1>
        <p className="text-gray-100 mb-8">
          Skill Bridge is your gateway to seamless learning and skill development. Manage courses, track progress, and engage effortlessly—all in one powerful platform. Start your learning journey today and bridge the gap to success!🚀
        </p>

        <form
          onSubmit={searchHandler}
          className="flex items-center bg-white rounded-md shadow-md overflow-hidden max-w-xl mx-auto mb-6"
        >
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for your next adventure in learning"
            className="flex-grow border-none focus-visible:ring-0 px-6 py-6 text-gray-800 placeholder-gray-400"
          />
          <Button
            type="submit"
            className="bg-orange-500 text-white px-6 py-6 rounded-r-md hover:bg-orange-600 transition-colors duration-300"
          >
            Find Courses
          </Button>
        </form>
        <Button
          onClick={() => navigate(`/course/search?query=`)}
          className="bg-white text-orange-500 rounded-md hover:bg-gray-100 transition-colors duration-300"
        >
          Explore All Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;