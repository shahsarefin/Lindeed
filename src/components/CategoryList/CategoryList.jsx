import React, { useEffect, useState } from 'react';
import { FaMoneyCheckAlt, FaPaintBrush, FaBullhorn, FaWrench } from 'react-icons/fa';

const iconMap = {
    FaMoneyCheckAlt: <FaMoneyCheckAlt size={40} />,
    FaPaintBrush: <FaPaintBrush size={40} />,
    FaBullhorn: <FaBullhorn size={40} />,
    FaWrench: <FaWrench size={40} />
};

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/data/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error("Error fetching categories:", error));
    }, []);

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Job Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map(category => (
                    <div key={category.id} className="card bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
                        <div className="mb-4">
                            {iconMap[category.icon]}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{category.category_name}</h3>
                        <p className="text-gray-600">{category.availability}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
