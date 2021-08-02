import React from 'react'

const BackToTop = ({ id }) => {
  return (
    <a
      href={id}
      className="circular ui icon button 2x"
      style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
    >
      <i className="angle up icon"></i>
    </a>
  )
}

export default BackToTop
