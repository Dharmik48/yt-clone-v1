import React, { useState } from 'react'
import youtube from './apis/youtube'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import BackToTop from './components/BackToTop'
import VideoDetail from './components/VideoDetail'

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState({})
  const [comments, setComments] = useState([])

  const searchForVideos = async (term) => {
    const videosData = await youtube.get('/search', {
      params: {
        q: term,
        maxResults: 15,
        type: 'video',
      },
    })
    setVideos(videosData.data.items)
    setSelectedVideo({})
    setComments([])
  }

  const choseVideo = async (video) => {
    const videoDetails = await youtube.get('/videos', {
      params: {
        id: video.id.videoId,
      },
    })

    setSelectedVideo(videoDetails.data.items[0])
  }

  const getComments = async (id) => {
    const { data } = await youtube.get('/commentThreads', {
      params: {
        videoId: id,
        maxResults: 20,
      },
    })

    setComments(data.items)
  }

  return (
    <div className="ui container">
      <SearchBar search={searchForVideos} />
      {!(
        Object.keys(selectedVideo).length === 0 &&
        selectedVideo.constructor === Object
      ) ? (
        <VideoDetail video={selectedVideo} comments={comments} />
      ) : (
        <div className="ui items">
          {videos.length !== 0 ? (
            <VideoList
              videos={videos}
              choseVideo={choseVideo}
              getComments={getComments}
            />
          ) : null}
        </div>
      )}
      <BackToTop id="#root" />
    </div>
  )
}

export default App
