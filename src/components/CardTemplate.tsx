import { useContext, useState } from "react"
import AppContext from "../context/AppContext"
import { imageList } from "../assets/images/imageList"
import { Link } from "react-router-dom"

type Props = {
  data: {
    title: string
    timeframes: {
      daily: {
        current: number
        previous: number
      }
      weekly: {
        current: number
        previous: number
      }
      monthly: {
        current: number
        previous: number
      }
    }
  }
  image: string
}
export default function CardTemplate({ data, image }: Props) {
  const [menuIsActive, setMenuIsActive] = useState(false)

  const { state } = useContext(AppContext)

  const handleMenuEvent = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (menuIsActive === true) {
      return setMenuIsActive(false)
    } else {
      return setMenuIsActive(true)
    }
  }

  return (
    <section className={`card_template ${data.title}`}>
      {/* Card Top */}
      <header>
        <img
          className="card_template-img"
          src={image}
          alt={data.title}
          width={50}
          height={50}
          loading="eager"
        />
      </header>

      {/* Card Middle */}
      <div className="card_template-body">
        <div className={`card_template-menu ${menuIsActive ? "active" : ""}`}>
          <button onClick={(e) => handleMenuEvent(e)}>
            <img
              className={`card_template-ellipsis ${
                menuIsActive ? "active" : ""
              }`}
              src={imageList.ellipsis}
              alt={"Card options"}
              width={50}
              height={50}
              loading="eager"
            />
          </button>
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <li>etc...</li>
          </ul>
        </div>

        <Link className="card_template-card" to={`/activity/${data.title}`}>
          <h1>{data.title}</h1>
          <h2>
            {state.daily
              ? data.timeframes.daily.current
              : state.weekly
              ? data.timeframes.weekly.current
              : state.monthly
              ? data.timeframes.monthly.current
              : "0"}
            <span>hrs</span>
          </h2>
          <button onClick={(e) => handleMenuEvent(e)}>
            <img
              className={`card_template-ellipsis ${
                menuIsActive ? "active" : ""
              }`}
              src={imageList.ellipsis}
              alt={"Card options"}
              width={50}
              height={50}
              loading="eager"
            />
          </button>
          <p>
            {state.daily
              ? "Yesterday"
              : state.weekly
              ? "Last Week"
              : state.monthly
              ? "Last Month"
              : ""}{" "}
            -
            <span>
              {" "}
              {state.daily
                ? data.timeframes.daily.previous
                : state.weekly
                ? data.timeframes.weekly.previous
                : state.monthly
                ? data.timeframes.monthly.previous
                : "0"}
              hrs
            </span>
          </p>
        </Link>
      </div>
    </section>
  )
}
