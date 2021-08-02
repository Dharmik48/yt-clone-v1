import React from 'react'
import Comments from './Comments'

const VideoDetail = ({ video, comments }) => {
  const {
    snippet: { channelTitle, description, title },
  } = video

  const vidoeSrc = `https://youtube.com/embed/${video.id}`

  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe title="video player" src={vidoeSrc}></iframe>
      </div>
      <h1 className="ui blue header">{title}</h1>
      <div className="meta">
        <h3 style={{ marginBottom: '1em' }}>{channelTitle}</h3>
      </div>
      <p>{description}</p>

      <h3 className="ui dividing header">Comments</h3>
      <Comments comments={comments} />
    </div>
  )
}

export default VideoDetail
