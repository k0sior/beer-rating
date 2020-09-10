import React from 'react'

export class SearchBox extends React.Component {

  render() {
    const searchValue = this.props.searchValue;

    return (
      <div className='searchBoxWrapper' >
        <form style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
      }}>
          <input
            type="text"
            placeholder="Szukaj..."
            value={searchValue} />
          <button 
            type="button" 
            onClick={searchValue}
            style={{
              width: 20,
              height: 21,
              marginLeft: 5,}}> </button>
        </form>
      </div>
    )
  }
}