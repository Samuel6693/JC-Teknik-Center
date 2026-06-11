import { productCategories, products } from "../data/products"

function Shop() {
  return (
    <section className="page-section">
      <h1>Butik</h1>
      <p>
        Webbshoppen innehåller {products.length} demo-produkter i{" "}
        {productCategories.length} kategorier.
      </p>
    </section>
  )
}

export default Shop