import YoutubeBackground from "react-youtube-background"
import SecDiv from "./SecDiv"

function Home() {
  const videos = ["FR4gMn-jVIM", "gONEwEUVr-s", "UKttFDnKSp8"]
  let index = Math.floor(Math.random() * videos.length)

  return (
    <div>
      <YoutubeBackground
        videoId={videos[index]}
        playerOptions={{
          loop: 1,
          showInfo: 0,
        }}
        className="youtube"
      />
      <SecDiv />
    </div>
  )
}

export default Home
