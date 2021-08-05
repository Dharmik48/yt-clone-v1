import React, { useState } from 'react'

const SearchBar = ({ search, sorted }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault()

    search(searchTerm, sorted)
  }

  return (
    <form className="ui form" onSubmit={onFormSubmit}>
      <div className="field">
        <label>Search on YouTube</label>
        <div className="ui action input">
          <input
            type="text"
            value={searchTerm}
            placeholder="Enter Here"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="ui primary icon button">
            <i className="search icon"></i>
          </button>
        </div>
      </div>

      <select
        className="ui dropdown"
        onChange={(e) => search(searchTerm, e.target.value)}
      >
        <option value="relevance" defaultValue>
          Relevance
        </option>
        <option value="date">Upload Date</option>
        <option value="viewCount">View Count</option>
        <option value="rating">Rating</option>
        <option value="title">By Title</option>
      </select>
    </form>
  )
}

export default SearchBar
