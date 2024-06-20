import React from 'react';
import userImage from '/img/user.png'; 

const Banner = () => {
    return (
        <div className="relative text-white p-8 mx-auto max-w-7xl flex justify-center items-center bg-cover bg-center">
            <div className="flex flex-col md:flex-row items-center bg-slate-200 bg-opacity-50 p-8 rounded-lg w-full">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-cyan-500">Welcome to Lindeed</h1>
                    <p className="text-cyan-500">Your dream job is just a click away!</p>
                    <h2 className="text-3xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                        One step closer to your dream job
                    </h2>
                    <p className="mt-4 text-black">
                        Discover thousands of job opportunities, connect with top companies, and
                        take the next step in your career journey. With Lindeed, finding your
                        perfect job has never been easier.
                    </p>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded mt-6">
                        Get Started
                    </button>
                </div>
                <div className="flex-1 text-right">
                    <img 
                        src={userImage} 
                        alt="User" 
                        className="w-full h-auto max-w-xs max-h-80 mx-auto md:mx-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
