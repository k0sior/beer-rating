import React from 'react'

class SearchBox extends React.Component {

  render() {
    const searchValue = this.props.searchValue;

    return (
      <div className='searchBoxWrapper'>
        <form>
          <input
            type="text"
            placeholder="Szukaj..."
            value={searchValue} />
        </form>
      </div>
    )
  }
}