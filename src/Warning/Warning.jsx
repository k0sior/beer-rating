import React from 'react'

export class Warning extends React.Component {

  render(){

    return(
      <div className="warningWrapper">
        <h5>OSTRZEŻENIE!</h5>
        <p>Strona wyłącznie dla osób pełnoletnich (18+)</p>
        <form>
          <button id='Adult' onClick={() => this.changeView("main")}>Jestem pełnoletni</button>
          <button type='submit' formAction="https://pl.wikipedia.org/wiki/Mleko">Nie jestem pełnoletni</button>
        </form>

      </div>
    )
  }
}