import { Link } from "react-router-dom"
import "./Services.css"

const serviceCategories = [
  {
    title: "Mobil",
    description: "Vanliga reparationer för iPhone och Android.",
    services: [
      { name: "Skärmbyte", time: "1-2 timmar", price: "fr. 899 kr" },
      { name: "Batteribyte", time: "30-60 min", price: "fr. 499 kr" },
      { name: "Felsökning", time: "15-30 min", price: "fr. 199 kr" },
    ],
  },
  {
    title: "Surfplatta",
    description: "Service för spruckna skärmar, batteri och laddning.",
    services: [
      { name: "Skärmreparation", time: "1-3 dagar", price: "fr. 1 299 kr" },
      { name: "Batteriservice", time: "1-2 dagar", price: "fr. 799 kr" },
      { name: "Laddkontakt", time: "1-2 dagar", price: "fr. 699 kr" },
    ],
  },
  {
    title: "Dator",
    description: "Felsökning och service för stationära och bärbara datorer.",
    services: [
      { name: "Felsökning", time: "30-60 min", price: "fr. 299 kr" },
      { name: "Rensning/optimering", time: "1-2 timmar", price: "fr. 499 kr" },
      { name: "Hårddisk/SSD-byte", time: "1-2 dagar", price: "fr. 699 kr" },
    ],
  },
  {
    title: "MacBook",
    description: "Service för MacBook, laddning, batteri och prestanda.",
    services: [
      { name: "Batteribyte", time: "1-3 dagar", price: "fr. 1 499 kr" },
      { name: "Felsökning", time: "30-60 min", price: "fr. 399 kr" },
      { name: "Systemservice", time: "1-2 timmar", price: "fr. 599 kr" },
    ],
  },
]

function Services() {
  return (
    <section className="page-section services-page">
      <div className="services-hero">
        <p className="services-eyebrow">Reparationer</p>
        <h1>Tjänster och prislista</h1>
        <p>
          Här hittar du vanliga reparationer, uppskattad tid och startpriser.
          Kontakta butiken om du är osäker på vilken service du behöver.
        </p>

        <div className="services-actions">
          <Link className="button button--primary" to="/kontakt">
            Boka reparation
          </Link>
          <Link className="button button--secondary" to="/kontakt">
            Fråga om pris
          </Link>
        </div>
      </div>

      <div className="services-grid">
        {serviceCategories.map((category) => (
          <article className="service-category" key={category.title}>
            <div>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>

            <ul className="service-list">
              {category.services.map((service) => (
                <li key={service.name}>
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.time}</p>
                  </div>
                  <strong>{service.price}</strong>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="services-note">
        <div>
          <p className="services-eyebrow">Bra att veta</p>
          <h2>Priser kan variera beroende på modell och reservdelar.</h2>
          <p>
            Startpriserna ger en tydlig riktning. För exakt pris hjälper vi dig
            gärna med felsökning eller rådgivning i butik.
          </p>
        </div>

        <Link className="button button--primary" to="/kontakt">
          Kontakta oss
        </Link>
      </div>

    </section>
  )
}

export default Services