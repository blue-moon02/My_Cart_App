import React from 'react';

interface CartItemProps {
  id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ id, title, description, price, discount, image, onRemove }) => {
  return (
    <div className="flex items-center border rounded-lg p-4">
      <img src={image} alt={title} className="w-24 h-24 rounded-lg mr-4"/>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-600">{title}</h3>
        <p className="text-gray-500">{description}</p>
        <p className="text-purple-600 font-bold">Special Price</p>
        <p className="text-lg font-bold">₹{price} <span className="text-green-500 text-sm">{discount}% off</span></p>
        <p className="text-gray-500 line-through">₹{price * 1.25}</p>
      </div>
      <button className="text-blue-600" onClick={() => onRemove(title)}>Remove</button>
    </div>
  );
};

export default CartItem;

