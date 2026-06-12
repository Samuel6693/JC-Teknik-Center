import { useMemo, useState } from "react"
import { productCategories, products } from "../data/products"
import "./Shop.css"

const allCategory = "Alla"

function formatPrice(price) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  }).format(price)
}

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState(allCategory)

  const categories = [allCategory, ...productCategories]

  const filteredProducts = useMemo(() => {
    if (selectedCategory === allCategory) {
      return products
    }

    return products.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  return (
    <section className="page-section shop-page">
      <div className="shop-hero">
        <p className="shop-eyebrow">Webbshop</p>
        <h1>Produkter och begagnad elektronik.</h1>
        <p>
          Bläddra bland demo-produkter, tillbehör och begagnade enheter. I den
          här MVP-versionen visas produkterna med lokal mockdata.
        </p>
      </div>

      <div className="shop-filters" aria-label="Produktkategorier">
        {categories.map((category) => (
          <button
            className={
              selectedCategory === category
                ? "shop-filter shop-filter--active"
                : "shop-filter"
            }
            key={category}
            onClick={() => setSelectedCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-card__media">
              <span>{product.image}</span>
            </div>

            <div className="product-card__content">
              <p className="product-card__category">{product.category}</p>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>

            <div className="product-card__footer">
              <strong>{formatPrice(product.price)}</strong>
              <span>{product.stockStatus}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Shop