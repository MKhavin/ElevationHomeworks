import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category, id) => (
        <CategoryCard categoryData={category} key={id} />
      ))}
    </div>
  );
}

export default CategoryList;
