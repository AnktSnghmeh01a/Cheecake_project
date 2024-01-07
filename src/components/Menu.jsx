import React from 'react';
import { FaStar } from 'react-icons/fa';
import img1 from '../asserts/Menu-asserts1.png';
import img2 from '../asserts/Menu-asserts2.png';
import img3 from '../asserts/Menu-asserts3.png';

const Menu = () => {
  // Sample data for three menu items
  const menuData = [
    {
      photo: img1,
      text: 'Blueberry Cheesecake',
      money: '$10.99',
      rating: 4, // Rating out of 5
    },
    {
      photo: img2,
      text: 'Biscoff Cheesecake',
      money: '$8.99',
      rating: 3.5, // Rating out of 5
    },
    {
      photo: img3,
      text: 'Chocolate Cheesecake',
      money: '$12.49',
      rating: 4.5, // Rating out of 5
    },
  ];

// Render stars
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} color="#ffc107" />);
  }

  if (halfStar) {
    stars.push(<FaStar key="half" half color="#ffc107" />);
  }

  return stars;
};

  return (
    <div className='menu' id='menu'>
      <h1>Our Menu</h1>

      <div className="menu-container">

        {menuData.map((item, index) => (
          <div className="my-menu-cart" key={index}>

            {/* Image portion */}
            <div className="imgDiv">
              <img src={item.photo} alt={`Item ${index + 1}`} />
            </div>

           {/* heading portion */}
            <div className="txt-part">
              <h3>{item.text}</h3>
            </div>

            {/* Rating portion */}
            <div className="rating-part">
              <p>{item.money}</p>
              <div className="rating">
              {renderStars(item.rating)} 
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
