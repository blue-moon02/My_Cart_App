import { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';

const Index = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Fetch cart data from backend API (for now, using dummy data)
    const fetchCartData = async () => {
      const response = await fetch('https://my-cart-app-5abj.onrender.com/cart');
      const data = await response.json();
      setCartItems(data.items);
      setTotal(data.total);
    };
    fetchCartData();
  }, []);

  const handleRemove =  (title: string) => {
      setCartItems(cartItems.filter((item) => item.title !== title));
    setTotal(cartItems.reduce((acc, item) => acc + item.price, 0));
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <img src="https://img.icons8.com/?size=100&id=EvazdCr0ldoX&format=png&color=000000" width="50" alt="Logo" className="mr-2" />
            <span className="text-2xl font-bold text-purple-600">nest</span>
            <span className="text-sm text-gray-500 ml-2">EMPOWERING TOMORROW</span>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
            <a href="#" className="text-purple-600">My Cart</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex flex-col lg:flex-row mt-8 px-6">
        <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-md p-6 mb-6 lg:mb-0 lg:mr-6">
          <h2 className="text-xl font-bold mb-4 text-black">My Cart</h2>
          <p className="text-gray-500 mb-4">{cartItems.length} items in cart</p>
          <div className="space-y-4">
            {cartItems.map(item => (
              <CartItem key={item._id} {...item} onRemove={handleRemove} />
            ))}
          </div>
        </div>
        <CartSummary
          total={total}
          discount={1000}
          coupon={500}
          scholarship={200}
          finalTotal={total - 1700}
        />
      </main>
    </div>
  );
};

export default Index;
