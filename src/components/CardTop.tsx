import { useContext } from "react"
import profile_img from "../assets/images/image-jeremy.png"
import AppContext from "../context/AppContext"

export default function CardTop() {
  const { state, dispatch } = useContext(AppContext)
  console.log(state)

  return (
    <section className="card_top">
      {/* Card Header */}
      <header>
        <img
          className="card_top-img"
          src={profile_img}
          alt="Your profile picture"
          width={200}
          height={200}
          loading="eager"
        />
        <div className="card_top-text">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </header>
      {/* Card Body */}
      <div>
        <button
          className="card_top-btn"
          type="button"
          onClick={() => {
            dispatch({ type: "daily" })
          }}
        >
          Daily
        </button>
        <button
          className="card_top-btn"
          type="button"
          onClick={() => {
            dispatch({ type: "weekly" })
          }}
        >
          Weekly
        </button>
        <button
          className="card_top-btn"
          type="button"
          onClick={() => {
            dispatch({ type: "monthly" })
          }}
        >
          Monthly
        </button>
      </div>
    </section>
  )
}
