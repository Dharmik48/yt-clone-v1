import React from 'react'

const Comments = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    const {
      snippet: {
        topLevelComment: { snippet, id },
      },
    } = comment

    const date = new Date(snippet.updatedAt).toDateString()

    return (
      <div className="comment" key={id}>
        <a href={snippet.authorChannelUrl} className="avatar">
          <img src={snippet.authorProfileImageUrl} alt="avatar" />
        </a>
        <div className="content">
          <a href={snippet.authorChannelUrl} className="author">
            {snippet.authorDisplayName}
          </a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: snippet.textDisplay }}
          ></div>
        </div>
      </div>
    )
  })

  return <div className="ui comments">{renderedComments}</div>
}

export default Comments
