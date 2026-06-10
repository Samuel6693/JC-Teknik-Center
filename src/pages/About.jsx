import { Link } from "react-router-dom"
import "./About.css"

function About() {
  return (
    <section className="page-section about-page">
      <div className="about-hero">
        <p className="about-eyebrow">Om JC Teknik Center</p>
        <h1>Personlig teknikservice med fokus på tydlighet och trygghet.</h1>
        <p>
          JC Teknik Center hjälper kunder med reparationer, produkter och
          rådgivning för mobil, dator och annan vardagsteknik.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <h2>Vår service</h2>
          <p>
            Vi vill göra teknikproblem enklare att lösa genom tydlig
            kommunikation, rimliga tidsuppskattningar och personlig hjälp.
          </p>
        </article>

        <article className="about-card">
          <h2>Vårt fokus</h2>
          <p>
            Kunden ska snabbt förstå vad som behöver göras, vad det kostar och
            hur nästa steg ser ut.
          </p>
        </article>

        <article className="about-card">
          <h2>Vårt mål</h2>
          <p>
            Att bygga en modern butik där reparationer, webbshop och kontakt är
            enkla att använda både online och i butik.
          </p>
        </article>
      </div>
      <div className="about-process">
        <div>
          <p className="about-eyebrow">Så jobbar vi</p>
          <h2>En tydlig process från felsökning till färdig lösning.</h2>
        </div>

        <ol className="process-list">
          <li>
            <span>01</span>
            <div>
              <h3>Felsökning</h3>
              <p>Vi går igenom problemet och förklarar möjliga lösningar.</p>
            </div>
          </li>

          <li>
            <span>02</span>
            <div>
              <h3>Tydligt besked</h3>
              <p>Du får information om pris, tid och vad reparationen innebär.</p>
            </div>
          </li>

          <li>
            <span>03</span>
            <div>
              <h3>Service och uppföljning</h3>
              <p>Vi utför arbetet och hjälper dig vidare om du har frågor.</p>
            </div>
          </li>
        </ol>
      </div>

      <div className="about-cta">
        <div>
          <h2>Behöver du hjälp med din enhet?</h2>
          <p>
            Kontakta oss eller gå vidare till tjänstesidan för att se vilka
            reparationer vi erbjuder.
          </p>
        </div>

        <div className="about-cta__actions">
          <Link className="button button--primary" to="/kontakt">
            Kontakta oss
          </Link>
          <Link className="button button--secondary" to="/tjanster">
            Se tjänster
          </Link>
        </div>
      </div>

    </section>
  )
}

export default About