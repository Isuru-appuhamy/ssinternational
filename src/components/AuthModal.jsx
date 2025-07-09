import React, { useState } from 'react';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md border relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? 'Login' : 'Registration'}
        </h2>

        {isLogin ? (
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded" />

            <select className="w-full p-2 border rounded">
              <option value="">Select User Type</option>
              <option value="admin">Admin</option>
              <option value="driver">Driver</option>
              <option value="customer">Customer</option>
            </select>

            <div className="text-sm text-right text-blue-600 hover:underline cursor-pointer">
              Forgot Password?
            </div>

            <button className="w-full bg-orange-500 text-white py-2 rounded font-semibold">
              Sign In
            </button>

            <p className="text-center text-sm">
              Don't have an account?{' '}
              <span
                onClick={() => setIsLogin(false)}
                className="text-orange-500 font-semibold cursor-pointer hover:underline"
              >
                Register
              </span>
            </p>
          </form>
        ) : (
          <form className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="col-span-1 p-2 border rounded" />
            <input type="text" placeholder="Last Name" className="col-span-1 p-2 border rounded" />
            <input type="email" placeholder="Email Address" className="col-span-1 p-2 border rounded" />
            <input type="text" placeholder="Contact Number" className="col-span-1 p-2 border rounded" />
            <input type="password" placeholder="Password" className="col-span-1 p-2 border rounded" />
            <input type="password" placeholder="Confirm Password" className="col-span-1 p-2 border rounded" />

            <div className="col-span-2 flex justify-center">
              <button className="bg-orange-500 text-white py-2 px-6 rounded font-semibold">
                Submit
              </button>
            </div>

            <p className="col-span-2 text-center text-sm">
              If you already have an Account?{' '}
              <span
                onClick={() => setIsLogin(true)}
                className="text-orange-500 font-semibold cursor-pointer hover:underline"
              >
                Sign In
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;