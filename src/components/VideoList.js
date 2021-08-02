import React from 'react'

const VideoList = ({ videos, choseVideo, getComments }) => {
  const renderedVideos = videos.map((video) => {
    const {
      id: { videoId },
      snippet,
    } = video

    const publishDate = new Date(snippet.publishedAt).toDateString()

    return (
      <div
        className="ui item"
        key={videoId}
        style={{ marginBottom: '2em', cursor: 'pointer' }}
        onClick={() => {
          choseVideo(video)
          getComments(videoId)
        }}
      >
        <div className="ui medium image">
          <img
            src={snippet.thumbnails.medium.url}
            alt={snippet.title}
            style={{ marginRight: '1rem' }}
          />
        </div>
        <div className="content">
          <h3 className="ui blue header">{snippet.title}</h3>
          <div className="meta">
            <span>{snippet.channelTitle}</span>
            <span style={{ marginLeft: '1rem' }}>{publishDate}</span>
          </div>
          <div className="description">
            <p>{snippet.description}</p>
          </div>
        </div>
      </div>
    )
  })

  return renderedVideos
}

export default VideoList
