import React from 'react';

const Banner = () => {
    return (
        <div className="banner bg-slate-500 text-white p-8 flex flex-col md:flex-row items-center">
            <div className="flex-1">
                <h1 className="text-4xl font-bold text-cyan-500">Welcome to Lindeed</h1>
                <p className="text-cyan-500">Your dream job is just a click away!</p>
            </div>
            <div className="flex-1">
                <img 
                    src="/img/banner-img.jpg" 
                    alt="Banner" 
                    className="w-full h-auto max-w-xs max-h-80"
                />
            </div>
        </div>
    );
};

export default Banner;
