import React from 'react';
import './CategoryList.css';
import { Link } from 'react-router-dom';

const CategoryCard = ({ categoryData }) => {
  const { name, description, imageUrl, routeLink } = categoryData;
  return (
    <Link to={`/wiki/${routeLink}`} className='link'>
      <div className="card category-card" style={{ backgroundImage: `url(${imageUrl})` }}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default CategoryCard;
