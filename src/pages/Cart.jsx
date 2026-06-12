import { Link } from "react-router-dom"
import "./Cart.css"

function formatPrice(price) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0,
  }).format(price)
}

function Cart({ cartItems, onRemoveFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <section className="page-section cart-page">
      <div className="cart-hero">
        <p className="cart-eyebrow">Kundvagn</p>
        <h1>Din kundvagn</h1>
        <p>
          Här visas produkter som lagts till i demo-läget. Ingen riktig
          betalning sker ännu.
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <h2>Kundvagnen är tom</h2>
          <p>Lägg till en produkt från webbshoppen för att fortsätta.</p>
          <Link className="button button--primary" to="/webbshop">
            Till webbshop
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.category}</p>
                </div>

                <strong>{formatPrice(item.price)}</strong>

                <button
                  className="cart-remove"
                  onClick={() => onRemoveFromCart(item.id)}
                  type="button"
                >
                  Ta bort
                </button>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Sammanfattning</h2>
            <div className="cart-summary__row">
              <span>Totalt</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <button className="button button--primary" type="button">
              Gå till checkout
            </button>
          </aside>
        </div>
      )}
    </section>
  )
}

export default Cart