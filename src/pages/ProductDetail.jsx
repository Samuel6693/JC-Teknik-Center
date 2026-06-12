import { Link, useParams } from "react-router-dom"
import { products } from "../data/products"
import "./ProductDetail.css"

function formatPrice(price) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  }).format(price)
}

function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <section className="page-section product-detail-page">
        <div className="product-not-found">
          <h1>Produkten hittades inte</h1>
          <p>Produkten kan ha tagits bort eller fått en ny adress.</p>
          <Link className="button button--primary" to="/webbshop">
            Tillbaka till webbshop
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section product-detail-page">
      <Link className="product-back-link" to="/webbshop">
        Tillbaka till webbshop
      </Link>

      <div className="product-detail">
        <div className="product-detail__media">
          <span>{product.image}</span>
        </div>

        <div className="product-detail__content">
          <p className="product-detail__category">{product.category}</p>
          <h1>{product.name}</h1>
          <p>{product.description}</p>

          <div className="product-detail__meta">
            <strong>{formatPrice(product.price)}</strong>
            <span>{product.stockStatus}</span>
          </div>

          <button className="button button--primary"
            onClick={() => onAddToCart(product)}
            type="button">
            Lägg i kundvagn
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail