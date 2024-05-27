import CardTemplate from "../components/CardTemplate"
import CardTop from "../components/CardTop"
import { imageList } from "../assets/images/imageList"
import data from "../data/data.json"

export default function Home() {
  const activityData = data[0]
  return (
    <main>
      <CardTop />
      <CardTemplate data={activityData.work} image={imageList.work} />
      <CardTemplate data={activityData.play} image={imageList.play} />
      <CardTemplate data={activityData.study} image={imageList.study} />
      <CardTemplate data={activityData.exercise} image={imageList.exercise} />
      <CardTemplate data={activityData.social} image={imageList.social} />
      <CardTemplate data={activityData.selfcare} image={imageList.selfcare} />
    </main>
  )
}
