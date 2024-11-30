import React from 'react';

interface CartSummaryProps {
  total: number;
  discount: number;
  coupon: number;
  scholarship: number;
  finalTotal: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total, discount, coupon, scholarship, finalTotal }) => {
  return (
    <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-black">Purchase Summary</h2>
      <p className="text-gray-900 mb-4">Price Details</p>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span  className="text-gray-500">Total MRP</span>
          <span className="text-gray-900">₹{total}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Discount on MRP</span>
          <span className="text-green-500">₹{discount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Coupon Discount</span>
          <span className="text-green-500">-₹{coupon}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Scholarship</span>
          <span className="text-green-500">-₹{scholarship}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span className="text-black">Total Amount</span>
          <span className="text-black">₹{finalTotal}</span>
        </div>
      </div>
      <button className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4">Proceed Checkout</button>
    </div>
  );
};

export default CartSummary;
