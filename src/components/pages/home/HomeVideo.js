

export default function HomeVideo() {
  return (
    <div className="video_container">
        <div className="overlay">
          <marquee scrollamount={50}>Choice Supermarket</marquee>
        </div>
        <video src="vidoes/videoplayback.mp4" autoPlay muted loop></video>
    </div>
  )
}