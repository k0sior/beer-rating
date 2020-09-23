import React from 'react'

export class SearchBox extends React.Component {

  render() {
    const searchValue = this.props.searchValue;
    const searchValueSubmit = this.props.searchValueSubmit;
    return (
      <div className='searchBoxWrapper' >
        <form>
          <input
            type="text"
            placeholder="Szukaj..."
            value={searchValue}
            style={{
              marginRight: 2,}} />
          <button 
            type="button" 
            onClick={searchValueSubmit}>Szukaj</button>
        </form>
      </div>
    )
  }
}