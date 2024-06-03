import { imageList } from "../assets/images/imageList"
import iconBack from "../assets/icons/arrow_back_ios.svg"
import data from "../data/data.json"
import { Link } from "react-router-dom"

export default function Profile() {
  const activityData = data[0]
  const activityStats = Object.values(activityData).map((item) => {
    return (
      <section key={item.title}>
        <h3>{item.title}</h3>
        <p>{`Today - ${item.timeframes.daily.current} hrs`}</p>
        <p>{`Yesterday - ${item.timeframes.daily.previous} hrs`}</p>
        <p>{`This Week - ${item.timeframes.weekly.current} hrs`}</p>
        <p>{`Last Week - ${item.timeframes.weekly.previous} hrs`}</p>
        <p>{`This Month - ${item.timeframes.monthly.current} hrs`}</p>
        <p>{`Last Month - ${item.timeframes.monthly.previous} hrs`}</p>
      </section>
    )
  })

  return (
    <section className="card_profile">
      {/* Card Header */}
      <header>
        <Link to="/">
          <img className="icon-back" src={iconBack} alt="Return to Home Page" />
        </Link>
        <div className="img_container">
          <img
            src={imageList.profile}
            alt="Your profile picture"
            width={75}
            height={75}
            loading="eager"
          />
        </div>
        <div className="card_profile-text">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </header>
      <div className="card_profile-stats">
        <h2>Statistics</h2>
        <div className="card_profile_activity">{activityStats}</div>
      </div>
    </section>
  )
}
