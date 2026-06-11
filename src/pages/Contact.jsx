import { useState } from "react"
import "./Contact.css"

const repairTypes = [
  "Skärmbyte",
  "Batteribyte",
  "Felsökning",
  "Datorservice",
  "MacBook-service",
  "Annat",
]

const bookingTimes = ["10:00", "11:00", "13:00", "14:00", "15:00"]
const unavailableTimes = ["11:00", "14:00"]

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedTime, setSelectedTime] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (!selectedTime) {
      return
    }

    setIsSubmitted(true)
  }

  return (
    <section className="page-section contact-page">
      <div className="contact-hero">
        <p className="contact-eyebrow">Boka eller kontakta oss</p>
        <h1>Boka reparation eller skicka en fråga.</h1>
        <p>
          Fyll i formuläret så återkommer butiken med nästa steg. I MVP-versionen
          skickas ingen riktig bokning ännu.
        </p>
      </div>

      <div className="contact-layout">
        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            Namn
            <input name="name" required type="text" />
          </label>

          <label>
            Kontaktuppgift
            <input name="contact" required type="text" placeholder="Telefon eller e-post" />
          </label>

          <label>
            Enhet
            <input name="device" required type="text" placeholder="Ex. iPhone 13, MacBook Pro" />
          </label>

          <label>
            Reparationstyp
            <select name="repairType" required defaultValue="">
              <option value="" disabled>
                Välj reparation
              </option>
              {repairTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            Önskat datum
            <input name="date" required type="date" />
          </label>

          <fieldset className="time-picker">
            <legend>Önskad tid</legend>

            <div className="time-options">
              {bookingTimes.map((time) => {
                const isUnavailable = unavailableTimes.includes(time)

                return (
                  <label
                    className={
                      isUnavailable
                        ? "time-option time-option--disabled"
                        : "time-option"
                    }
                    key={time}
                  >
                    <input
                      checked={selectedTime === time}
                      disabled={isUnavailable}
                      name="time"
                      onChange={() => setSelectedTime(time)}
                      required
                      type="radio"
                      value={time}
                    />
                    {time}
                  </label>
                )
              })}
            </div>

            <p className="time-helper">
              Grå tider är upptagna i demo-läget.
            </p>
          </fieldset>

          <label>
            Meddelande
            <textarea name="message" rows="5" placeholder="Beskriv problemet kort" />
          </label>

          <button className="button button--primary" type="submit">
            Skicka bokningsförfrågan
          </button>

          {isSubmitted && (
            <p className="booking-success">
              Tack! Din bokningsförfrågan för {selectedTime} är registrerad i demo-läget.            </p>
          )}
        </form>

        <aside className="contact-card">
          <h2>Kontaktuppgifter</h2>
          <p>Telefon, e-post, adress och öppettider läggs in här.</p>
          <ul>
            <li>Snabb återkoppling</li>
            <li>Tydlig prisinformation</li>
            <li>Personlig service i butik</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Contact