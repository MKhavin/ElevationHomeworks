import React from 'react';
import CategoryCard from './CategoryCard';
import { Link } from "react-router-dom"

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      <Link to="/wiki/potions" className='link'>
        <CategoryCard id="potions" categoryData={categories[0]} />
      </Link>
      <Link to="/wiki/charms" className='link'>
        <CategoryCard id="charms" categoryData={categories[1]} />
      </Link>

      {categories.slice(2).map(category => (
        <CategoryCard categoryData={category} />
      ))}
    </div>
  );
}

export default CategoryList;
