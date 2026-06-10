import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
  return (
    <section className="page-section home-page">
      <div className="home-hero">
        <p className="home-eyebrow">Mobil- och datorservice</p>
        <h1>Snabb hjälp med reparationer, produkter och tekniksupport.</h1>
        <p>
          JC Teknik Center hjälper kunder med mobilreparationer, datorservice,
          begagnad elektronik och personlig rådgivning.
        </p>

        <div className="home-actions">
          <Link className="button button--primary" to="/tjanster">
            Boka reparation
          </Link>
          <Link className="button button--secondary" to="/webbshop">
            Besök webbshop
          </Link>
        </div>
      </div>

      <div className="home-grid">
        <article className="info-card">
          <h2>Reparationer</h2>
          <p>Prislista och service för mobil, surfplatta, dator och MacBook.</p>
        </article>

        <article className="info-card">
          <h2>Webbshop</h2>
          <p>Produkter, tillbehör och begagnad elektronik samlat på ett ställe.</p>
        </article>

        <article className="info-card">
          <h2>Trygg service</h2>
          <p>Tydlig kontakt, garantiinformation och hjälp nära kunden.</p>
        </article>
      </div>
    </section>
  )
}

export default Home