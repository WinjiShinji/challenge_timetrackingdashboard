import { useContext } from "react"
import AppContext from "../context/AppContext"
import { useNavigate } from "react-router-dom"
import { imageList } from "../assets/images/imageList"

export default function CardTop() {
  const { state, dispatch } = useContext(AppContext)
  const nav = useNavigate()

  const handleNavigate = () => {
    nav("/profile")
  }

  return (
    <section className="card_top">
      {/* Card Header */}
      <header onClick={() => handleNavigate()}>
        <img
          className="card_top-img"
          src={imageList.profile}
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
      <div className="card_body">
        <button
          className={`card_top-btn ${state.daily === true ? "active" : ""}`}
          type="button"
          onClick={() => {
            dispatch({ type: "daily" })
          }}
        >
          Daily
        </button>
        <button
          className={`card_top-btn ${state.weekly === true ? "active" : ""}`}
          type="button"
          onClick={() => {
            dispatch({ type: "weekly" })
          }}
        >
          Weekly
        </button>
        <button
          className={`card_top-btn ${state.monthly === true ? "active" : ""}`}
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
