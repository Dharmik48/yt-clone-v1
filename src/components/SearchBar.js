import React, { useState } from 'react'

const SearchBar = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault()

    search(searchTerm)
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
    </form>
  )
}

export default SearchBar
