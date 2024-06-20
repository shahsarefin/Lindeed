import React, { useEffect, useState } from 'react';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/data/job_categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("Failed to fetch categories:", err));
    }, []);

    return (
        <div className="category-list p-8">
            <h2 className="text-3xl font-bold mb-4">Job Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map(category => (
                    <div key={category.id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={category.logo} alt={category.category_name} className="w-20 h-20 object-contain" />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">{category.category_name}</h3>
                            <p>{category.availability}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
