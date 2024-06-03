import { Link, useParams } from "react-router-dom"
import { imageList } from "../assets/images/imageList"
import data from "../data/data.json"
import iconBack from "../assets/icons/arrow_back_ios.svg"

export default function Activity() {
  const { id } = useParams()

  const activityData = data[0]
  const activityArr = Object.values(activityData)

  const activityFilter = activityArr.filter((item) => {
    if (item.title === id) {
      return item.timeframes
    }
  })
  const activity = activityFilter[0]

  return (
    <section className="activity_container">
      <header className={`activity_header ${activity.title}`}>
        <img
          className="activity-img"
          src={imageList[activity.title]}
          alt={""}
          width={50}
          height={50}
          loading="eager"
        />
        <Link to="/">
          <img className="icon-back" src={iconBack} alt="Return to Home Page" />
        </Link>
        <h1>{id}</h1>
      </header>
      <div className="activity_body">
        <h2>{`${id} totals`}</h2>
        <p>{`Today - ${activity.timeframes.daily.current} hrs`}</p>
        <p>{`Yesterday - ${activity.timeframes.daily.previous} hrs`}</p>
        <p>{`This Week - ${activity.timeframes.weekly.current} hrs`}</p>
        <p>{`Last Week - ${activity.timeframes.weekly.previous} hrs`}</p>
        <p>{`This Month - ${activity.timeframes.monthly.current} hrs`}</p>
        <p>{`Last Month - ${activity.timeframes.monthly.previous} hrs`}</p>
      </div>
    </section>
  )
}
