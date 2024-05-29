import { useContext } from "react"
import AppContext from "../context/AppContext"
import { imageList } from "../assets/images/imageList"

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
  const { state } = useContext(AppContext)
  return (
    <section className={`card_template ${data.title}`}>
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
      <div className="card_template-body">
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
        <img
          className="card_template-ellipsis"
          src={imageList.ellipsis}
          alt={"Card options"}
          width={50}
          height={50}
          loading="eager"
        />
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
      </div>
    </section>
  )
}
