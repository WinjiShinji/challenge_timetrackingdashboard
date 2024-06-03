import profile from "./image-jeremy.png"
import work from "./icon-work.svg"
import play from "./icon-play.svg"
import study from "./icon-study.svg"
import exercise from "./icon-exercise.svg"
import social from "./icon-social.svg"
import selfcare from "./icon-self-care.svg"
import ellipsis from "./icon-ellipsis.svg"

type ImgList = {
  [index: string]: string
}

export const imageList: ImgList = {
  profile: profile,
  work: work,
  play: play,
  study: study,
  exercise: exercise,
  social: social,
  selfcare: selfcare,
  ellipsis: ellipsis,
}
