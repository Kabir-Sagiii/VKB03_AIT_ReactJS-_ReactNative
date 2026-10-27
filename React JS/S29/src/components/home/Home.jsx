
import React, { useState } from "react";

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

// ========================================
// PRODUCT DATA
// ========================================

const products = [
  {
    id: 1,
    name: "Wireless Earbuds, IPX8",
    price: 89,
    description: "Premium wireless earbuds",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&auto=format&fit=crop",
    category: "Earbuds",
    rating: 4.8,
    reviews: 121,
  },
  {
    id: 2,
    name: "AirPods Max",
    price: 559,
    description: "High-fidelity audio experience",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&auto=format&fit=crop",
    category: "Headphones",
    rating: 4.9,
    reviews: 214,
  },
  {
    id: 3,
    name: "Bose BT Earphones",
    price: 289,
    description: "Comfortable wireless headphones",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop",
    category: "Headphones",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 4,
    name: "VIVEFOX Headphones",
    price: 39,
    description: "Wired stereo headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop",
    category: "Headphones",
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 5,
    name: "JBL TUNE 600BTNC",
    price: 59,
    description: "Noise cancelling headphones",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop",
    category: "Headphones",
    rating: 4.8,
    reviews: 189,
  },
  {
    id: 6,
    name: "TAGRY Bluetooth",
    price: 109,
    description: "Wireless gaming earbuds",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop",
    category: "Earbuds",
    rating: 4.5,
    reviews: 112,
  },
  {
    id: 7,
    name: "Monster MNFLEX",
    price: 89,
    description: "Flexible wireless earphones",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&auto=format&fit=crop",
    category: "Earbuds",
    rating: 4.7,
    reviews: 135,
  },
  {
    id: 8,
    name: "Mpow CH6",
    price: 69,
    description: "Comfortable kids headphones",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop",
    category: "Headphones",
    rating: 4.6,
    reviews: 86,
  },
];

// ========================================
// CATEGORY DATA
// ========================================

const categories = [
  {
    name: "Headphones",
    count: "240+ Products",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    name: "Smartphones",
    count: "180+ Products",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    name: "Laptops",
    count: "120+ Products",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
  {
    name: "Cameras",
    count: "90+ Products",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },
];

// ========================================
// BEST SELLING PRODUCTS DATA
// ========================================

const bestSellers = [
  {
    id: 101,
    name: "Premium Headphones",
    price: 149,
    oldPrice: 199,
    description: "Premium audio quality",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    rating: 4.9,
    reviews: 121,
  },
  {
    id: 102,
    name: "Wireless Earbuds",
    price: 89,
    oldPrice: 129,
    description: "Wireless sound experience",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    rating: 4.8,
    reviews: 121,
  },
  {
    id: 103,
    name: "Smart Watch",
    price: 199,
    oldPrice: 249,
    description: "Smart fitness companion",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    rating: 4.7,
    reviews: 121,
  },
  {
    id: 104,
    name: "Digital Camera",
    price: 449,
    oldPrice: 549,
    description: "Capture every moment",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    rating: 4.8,
    reviews: 121,
  },
];

// ========================================
// BENEFITS DATA
// ========================================

const benefits = [
  {
    title: "Free Shipping",
    description: "Enjoy free shipping on qualifying orders.",
    icon: Truck,
  },
  {
    title: "Secure Payment",
    description: "Your transactions are safe and protected.",
    icon: ShieldCheck,
  },
  {
    title: "Easy Returns",
    description: "Simple and convenient return process.",
    icon: RotateCcw,
  },
  {
    title: "24/7 Support",
    description: "We're here to help whenever you need.",
    icon: Headphones,
  },
];

// ========================================
// REUSABLE PRODUCT CARD
// ========================================

function ProductCard({
  product,
  onAddToCart,
  isFavorite,
  onToggleFavorite,
  showSale = false,
}) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f5f5f5]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {showSale && (
          <span className="absolute left-3 top-3 rounded-full bg-[#00452e] px-3 py-1 text-xs font-bold text-white">
            SALE
          </span>
        )}

        <button
          type="button"
          onClick={() => onToggleFavorite(product.id)}
          aria-label={
            isFavorite
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-sm transition hover:scale-110"
        >
          <Heart
            size={18}
            className={
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-gray-600"
            }
          />
        </button>
      </div>

      <div className="pt-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
            {product.name}
          </h3>

          <span className="whitespace-nowrap text-sm font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="mt-1 text-xs text-gray-500">
          {product.description}
        </p>

        {product.oldPrice && (
          <p className="mt-2 text-sm text-gray-400 line-through">
            ${product.oldPrice.toFixed(2)}
          </p>
        )}

        <div className="mt-3 flex items-center gap-2">
          <div className="flex text-green-600">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={13}
                fill={
                  star <= Math.round(product.rating)
                    ? "currentColor"
                    : "none"
                }
              />
            ))}
          </div>

          <span className="text-xs text-gray-500">
            ({product.reviews})
          </span>
        </div>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-4 rounded-full border border-gray-800 px-5 py-2 text-xs font-semibold transition-all hover:border-[#00452e] hover:bg-[#00452e] hover:text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// ========================================
// MAIN HOME COMPONENT
// ========================================

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // ADD TO CART
  const addToCart = (product) => {
    setCart((previous) => [...previous, product]);
  };

  // TOGGLE WISHLIST
  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  // FILTER AND SORT PRODUCTS
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return a.id - b.id;
    });

  // RESET FILTERS
  const resetFilters = () => {
    setCategory("All");
    setSort("featured");
    setSearch("");
  };

  // NEWSLETTER
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Demo only. Connect your newsletter API here.
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      

      

      <main className="mx-auto max-w-7xl px-5 pb-20 md:px-8">

        {/* =====================================
            SECTION 3: HERO BANNER
        ===================================== */}

        <section className="relative mt-7 flex min-h-[340px] overflow-hidden rounded-lg bg-[#f9ede3] md:min-h-[400px]">

          <div className="relative z-10 flex w-full flex-col justify-center px-7 py-12 sm:w-3/5 md:px-16">
            <span className="mb-4 w-fit rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#00452e]">
              Limited Time Offer
            </span>

            <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#00452e] sm:text-4xl md:text-5xl">
              Grab Upto 50% Off On Selected Headphone
            </h1>

            <a
              href="#products"
              className="mt-8 flex w-fit items-center gap-2 rounded-full bg-[#00452e] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#006b48]"
            >
              Buy Now
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="absolute bottom-0 right-0 hidden h-full w-[46%] sm:block">
            <img
              src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop"
              alt="Premium headphones"
              className="h-full w-full object-cover object-center mix-blend-multiply"
            />
          </div>
        </section>

        {/* =====================================
            SECTION 4: PRODUCT FILTERS
        ===================================== */}

        <section
          id="products"
          className="scroll-mt-28 pt-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">

            <div className="flex flex-wrap items-center gap-2">
              {/* CATEGORY FILTER */}
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  className="appearance-none rounded-full bg-gray-100 py-3 pl-5 pr-10 text-xs font-semibold outline-none"
                >
                  <option value="All">
                    Headphone Type
                  </option>
                  <option value="Headphones">
                    Headphones
                  </option>
                  <option value="Earbuds">
                    Earbuds
                  </option>
                </select>

                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                />
              </div>

              {/* VISUAL FILTERS */}
              {[
                "Price",
                "Review",
                "Color",
                "Material",
                "Offer",
              ].map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className="flex items-center gap-2 rounded-full bg-gray-100 px-5 py-3 text-xs font-semibold transition hover:bg-gray-200"
                >
                  {filter}
                  <ChevronDown size={13} />
                </button>
              ))}

              {/* RESET FILTERS */}
              <button
                type="button"
                onClick={resetFilters}
                className="flex items-center gap-2 rounded-full bg-gray-100 px-5 py-3 text-xs font-semibold hover:bg-gray-200"
              >
                All Filters
                <SlidersHorizontal size={14} />
              </button>
            </div>

            {/* SORT */}
            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
              className="rounded-full border border-gray-200 bg-white px-5 py-3 text-xs font-semibold outline-none"
            >
              <option value="featured">
                Sort by: Featured
              </option>
              <option value="low">
                Price: Low to High
              </option>
              <option value="high">
                Price: High to Low
              </option>
              <option value="rating">
                Top Rated
              </option>
            </select>
          </div>

          {/* =====================================
              SECTION 5: PRODUCT GRID
          ===================================== */}

          <div className="mb-7 mt-12 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Headphones For You!
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Discover the perfect sound for your lifestyle.
              </p>
            </div>

            <span className="hidden text-sm text-gray-500 sm:block">
              {filteredProducts.length} Products
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  isFavorite={favorites.includes(
                    product.id
                  )}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-gray-50 py-20 text-center">
              <Headphones
                size={40}
                className="mx-auto text-gray-400"
              />

              <h3 className="mt-4 text-lg font-semibold">
                No products found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another search or category.
              </p>
            </div>
          )}
        </section>

        {/* =====================================
            SECTION 6: POPULAR CATEGORIES
        ===================================== */}

        <section
          id="categories"
          className="scroll-mt-28 py-16"
        >
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold md:text-3xl">
              Shop Our Top Categories
            </h2>

            <a
              href="#products"
              className="flex items-center gap-2 text-sm font-semibold text-[#00452e]"
            >
              View All
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {categories.map((item) => (
              <a
                href="#products"
                key={item.name}
                className="group relative overflow-hidden rounded-2xl bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 md:h-72"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-lg font-bold md:text-xl">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-white/80">
                    {item.count}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* =====================================
            SECTION 7: SPECIAL OFFERS
        ===================================== */}

        <section
          id="offers"
          className="grid scroll-mt-28 gap-6 py-10 md:grid-cols-2"
        >
          {/* OFFER CARD 1 */}
          <div className="relative flex min-h-72 overflow-hidden rounded-2xl bg-[#f6e8dc] p-8 md:p-10">
            <div className="relative z-10 max-w-[65%]">
              <p className="text-sm font-bold text-[#00452e]">
                LIMITED TIME DEAL
              </p>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#00452e] md:text-3xl">
                Up to 40% Off on Premium Audio
              </h2>

              <a
                href="#products"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#00452e] px-6 py-3 text-sm font-semibold text-white"
              >
                Shop Now
                <ArrowRight size={16} />
              </a>
            </div>

            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
              alt="Audio products"
              loading="lazy"
              className="absolute bottom-0 right-0 h-full w-2/5 object-cover opacity-90"
            />
          </div>

          {/* OFFER CARD 2 */}
          <div className="relative flex min-h-72 overflow-hidden rounded-2xl bg-[#e5eee9] p-8 md:p-10">
            <div className="relative z-10 max-w-[65%]">
              <p className="text-sm font-bold text-[#00452e]">
                NEW ARRIVALS
              </p>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#00452e] md:text-3xl">
                Discover the Latest Tech
              </h2>

              <a
                href="#bestsellers"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#00452e] px-6 py-3 text-sm font-semibold text-white"
              >
                Explore Now
                <ArrowRight size={16} />
              </a>
            </div>

            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
              alt="Latest technology"
              loading="lazy"
              className="absolute bottom-0 right-0 h-full w-2/5 object-cover"
            />
          </div>
        </section>

        {/* =====================================
            SECTION 8: BEST SELLING PRODUCTS
        ===================================== */}

        <section
          id="bestsellers"
          className="scroll-mt-28 py-16"
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Best Selling Products
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Our most loved products this season.
              </p>
            </div>

            <a
              href="#products"
              className="hidden items-center gap-2 text-sm font-semibold text-[#00452e] sm:flex"
            >
              View All
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                isFavorite={favorites.includes(
                  product.id
                )}
                onToggleFavorite={toggleFavorite}
                showSale
              />
            ))}
          </div>
        </section>

        {/* =====================================
            SECTION 9: WHY SHOP WITH US
        ===================================== */}

        <section
          id="benefits"
          className="scroll-mt-28 py-16"
        >
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">
            Why Shop With Us?
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-[#f4f7f5] p-8 text-center transition hover:shadow-lg"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#dcebe3] text-[#00452e]">
                    <Icon size={29} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================
            SECTION 10: NEWSLETTER & APP
        ===================================== */}

        <section className="py-14">
          <div className="grid overflow-hidden rounded-3xl bg-[#00452e] text-white lg:grid-cols-2">

            {/* NEWSLETTER */}
            <div className="p-8 md:p-14">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <Mail size={27} />
              </div>

              <h2 className="text-3xl font-extrabold">
                Subscribe & Save
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                Be the first to know about exclusive offers,
                new arrivals, and exciting discounts.
              </p>

              <form
                onSubmit={handleSubscribe}
                className="mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSubscribed(false);
                  }}
                  placeholder="Enter your email address"
                  className="min-w-0 flex-1 rounded-full bg-white px-5 py-3.5 text-sm text-gray-900 outline-none"
                />

                <button
                  type="submit"
                  className="rounded-full bg-[#f3d8bd] px-7 py-3.5 text-sm font-bold text-[#00452e] transition hover:bg-white"
                >
                  Subscribe
                </button>
              </form>

              {subscribed && (
                <p className="mt-3 text-sm text-green-200">
                  Demo submitted! Connect an API to save subscriptions.
                </p>
              )}
            </div>

            {/* MOBILE APP PROMOTION */}
            <div className="flex flex-col justify-center bg-[#0d5c42] p-8 md:p-14">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <Smartphone size={28} />
              </div>

              <h2 className="text-3xl font-extrabold">
                Shop Anywhere, Anytime
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                Experience effortless shopping on your mobile.
                Browse products, discover offers, and manage
                your orders wherever you go.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold">
                  App Store — Coming Soon
                </span>

                <span className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold">
                  Google Play — Coming Soon
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================
          SECTION 11: FOOTER
      ===================================== */}

      <footer className="border-t bg-[#fafafa]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-gray-500 md:flex-row md:px-8">
          <span className="text-lg font-bold text-[#00452e]">
            Shopcart
          </span>

          <p>
            © 2026 Shopcart. All rights reserved.
          </p>

          <p>
            Privacy Policy · Terms & Conditions
          </p>
        </div>
      </footer>
    </div>
  );
}
