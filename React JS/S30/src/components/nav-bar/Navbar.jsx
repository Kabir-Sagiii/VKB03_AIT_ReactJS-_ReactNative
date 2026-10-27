import React from 'react'
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  Search,
  UserRound,
  Heart,
  ChevronDown,
  SlidersHorizontal,
  Star,
  Menu,
  ArrowRight,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  Mail,
  Smartphone,
  X,
} from "lucide-react";
function Navbar() {
  return (
    // <div className='h-[90px] bg-black grid grid-cols-[40%_60%]'>
    //      <section className='text-green-300 flex justify-center items-center'>
    //         <h1 className='text-5xl font-bold'>My-Ecomm-Mart</h1>
    //      </section>
    //      <section className=' text-white flex justify-end items-center'>
    //         <Link to="" className='mr-17 text-xl'>Home</Link>
    //         <Link to="" className='mr-17 text-xl'>Products</Link>
    //         <Link to="" className='mr-17 text-xl'>Profile</Link>
    //         <Link to="" className='mr-17 text-xl'>ContactUs </Link>
    //         <Link to="" className='mr-17 text-xl '>
    //             <button>Login</button>
    //         </Link>
    //      </section>
    // </div>
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 md:px-8">

          {/* LOGO */}
          <Link
            to="#"
            className="flex shrink-0 items-center gap-2"
          >
            <div className="relative text-[#00452e]">
              <ShoppingCart
                size={29}
                strokeWidth={2.5}
              />
              <span className="absolute -right-1 -top-2 text-lg">
                🥕
              </span>
            </div>

            <span className="text-2xl font-extrabold tracking-tight text-[#00452e]">
              Shopcart
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-7 lg:flex">
            <Link
              to="/"
              className="flex items-center gap-1 text-sm font-medium hover:text-green-800"
            >
              Home
              
            </Link>

            <Link
              to="/products"
              className="text-sm font-medium hover:text-green-800"
            >
              Products
            </Link>

            

            <Link
              to="/profile"
              className="text-sm font-medium hover:text-green-800"
            >
             Profile
            </Link>
            <Link
              to="/contactus"
              className="text-sm font-medium hover:text-green-800"
            >
              Contactus
            </Link>
          </div>

          {/* DESKTOP SEARCH */}
          <div className="hidden max-w-xs flex-1 items-center rounded-full bg-gray-100 px-4 py-3 md:flex">
            <input
              type="text"
              placeholder="Search Product"
              
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
            />
            <Search
              size={18}
              className="text-gray-600"
            />
          </div>

          {/* ACCOUNT & CART */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="hidden items-center gap-2 text-sm font-medium sm:flex"
            >
              <UserRound size={20} />
              <span className="hidden xl:inline">
                Account
              </span>
            </button>

            <div className="relative flex items-center gap-2 text-sm font-medium">
              <ShoppingCart size={20} />

              <span className="hidden sm:inline">
                Cart
              </span>

              {/* {cart.length > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#00452e] px-1 text-[10px] text-white">
                  {cart.length}
                </span>
              )} */}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="lg:hidden"
              aria-label="Toggle menu"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
            >
              {/* {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )} */}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        
      </header>
  )
}

export default Navbar