
import React, { useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Leather Bag",
    category: "Bags",
    price: 285000,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600",
  },
  {
    id: 2,
    name: "Minimalist Shoulder Bag",
    category: "Bags",
    price: 325000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
  },
  {
    id: 3,
    name: "Elegant Fashion Watch",
    category: "Accessories",
    price: 450000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 4,
    name: "Premium Sneakers",
    category: "Shoes",
    price: 395000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  function Header() {
    return (
      <header className="header">
        <button className="logo" onClick={() => setPage("home")}>
          ASRI<span>.</span>
        </button>

        <nav>
          <button
            className={page === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            Home
          </button>
          <button
            className={page === "products" ? "active" : ""}
            onClick={() => setPage("products")}
          >
            Products
          </button>
        </nav>

        <button className="cart-button" aria-label="Shopping cart">
          <span>Bag</span>
          <b>{cart.length}</b>
        </button>
      </header>
    );
  }

  function ProductCard({ product }) {
    return (
      <article className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <button
            className="add-button"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            +
          </button>
        </div>

        <div className="product-info">
          <span className="category-label">{product.category}</span>
          <h3>{product.name}</h3>
          <strong>{formatPrice(product.price)}</strong>
        </div>
      </article>
    );
  }

  function Home() {
    return (
      <>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">NEW COLLECTION 2026</span>
            <h1>
              Simple style.
              <br />
              Timeless elegance.
            </h1>
            <p>
              Discover a collection designed for your everyday lifestyle.
            </p>
            <button
              className="primary-button"
              onClick={() => setPage("products")}
            >
              Explore Collection <span>→</span>
            </button>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR COLLECTION</span>
              <h2>Featured Products</h2>
            </div>
            <button
              className="text-button"
              onClick={() => setPage("products")}
            >
              View all →
            </button>
          </div>

          <div className="product-grid">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </>
    );
  }

  function Products() {
    return (
      <section className="section products-page">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DISCOVER MORE</span>
            <h2>All Products</h2>
          </div>
          <span className="product-count">
            {filteredProducts.length} items
          </span>
        </div>

        <input
          className="search-input"
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="categories">
          {["All", "Bags", "Accessories", "Shoes"].map((item) => (
            <button
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="empty-state">No products found.</p>
        )}
      </section>
    );
  }

  function Main() {
    return (
      <main className="main">
        {page === "home" ? <Home /> : <Products />}
      </main>
    );
  }

  return (
    <div className="app">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body, #root {
          width: 100%;
          min-height: 100%;
          margin: 0;
        }

        body {
          font-family: Inter, Arial, sans-serif;
          background: #ffffff;
          color: #171717;
        }

        button, input {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .app {
          width: 100%;
          height: 100%;
          max-width: 500px;
          margin: 0 auto;
          background: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .header {
          height: 66px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eeeeee;
          position: sticky;
          top: 0;
          z-index: 10;
          background: #fff;
        }

        .logo {
          border: 0;
          background: none;
          font-size: 21px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .logo span {
          color: #16803d;
        }

        .header nav {
          display: flex;
          gap: 18px;
        }

        .header nav button {
          border: 0;
          background: none;
          color: #888;
          font-size: 13px;
          padding: 8px 0;
        }

        .header nav button.active {
          color: #16803d;
          font-weight: 700;
        }

        .cart-button {
          display: flex;
          align-items: center;
          gap: 7px;
          border: 0;
          background: none;
          font-size: 12px;
        }

        .cart-button b {
          background: #16803d;
          color: white;
          border-radius: 50%;
          min-width: 21px;
          height: 21px;
          display: grid;
          place-items: center;
        }

        .main {
          flex: 1;
        }

        .hero {
          margin: 16px;
          min-height: 340px;
          padding: 35px 24px;
          border-radius: 12px;
          background: #101a15;
          color: white;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: #16803d;
          opacity: .2;
          right: -90px;
          bottom: -65px;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 700;
          color: #16803d;
        }

        .hero .eyebrow {
          color: #91d3a6;
        }

        .hero h1 {
          font-size: clamp(32px, 9vw, 43px);
          line-height: 1.12;
          letter-spacing: -1.8px;
          margin: 18px 0 12px;
        }

        .hero p {
          color: #c3cbc5;
          font-size: 13px;
          line-height: 1.7;
          max-width: 260px;
        }

        .primary-button {
          margin-top: 20px;
          padding: 13px 17px;
          border: 0;
          border-radius: 5px;
          background: #16803d;
          color: white;
          font-size: 12px;
          font-weight: 700;
        }

        .primary-button span {
          margin-left: 10px;
        }

        .section {
          padding: 26px 16px 40px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .section-heading h2 {
          margin: 7px 0 0;
          font-size: 23px;
          letter-spacing: -.8px;
        }

        .text-button {
          background: none;
          border: 0;
          color: #16803d;
          font-size: 12px;
          font-weight: 700;
        }

        .product-count {
          font-size: 11px;
          color: #888;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px 12px;
        }

        .product-card {
          min-width: 0;
        }

        .product-image {
          aspect-ratio: 1 / 1.15;
          background: #f5f5f3;
          position: relative;
          border-radius: 7px;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .add-button {
          position: absolute;
          right: 9px;
          bottom: 9px;
          width: 34px;
          height: 34px;
          border: 0;
          border-radius: 50%;
          background: #16803d;
          color: white;
          font-size: 23px;
        }

        .product-info {
          padding-top: 10px;
        }

        .category-label {
          color: #888;
          font-size: 10px;
        }

        .product-info h3 {
          font-size: 13px;
          margin: 5px 0 8px;
          font-weight: 600;
        }

        .product-info strong {
          font-size: 13px;
        }

        .search-input {
          width: 100%;
          padding: 13px 14px;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          outline: none;
          font-size: 13px;
          margin-bottom: 15px;
        }

        .search-input:focus {
          border-color: #16803d;
        }

        .categories {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 18px;
        }

        .categories button {
          white-space: nowrap;
          padding: 9px 15px;
          border: 1px solid #e5e5e5;
          background: white;
          border-radius: 30px;
          font-size: 11px;
        }

        .categories button.selected {
          background: #16803d;
          border-color: #16803d;
          color: white;
        }

        .empty-state {
          padding: 50px 0;
          text-align: center;
          color: #888;
          font-size: 13px;
        }

        @media (min-width: 600px) {
          .app {
            border-left: 1px solid #eee;
            border-right: 1px solid #eee;
          }
        }
      `}</style>

      <Header />
      <Main />
    </div>
  );
}
