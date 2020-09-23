import React from 'react';

export class Warning extends React.Component {

  render(){
    const entryView = this.props.entryView
    return( 
      <div className="warningWrapper" >
        <h5>OSTRZEŻENIE!</h5>
        <p>Strona wyłącznie dla osób pełnoletnich (18+)</p>
        <form>
          <button type="button" id='adultButton' onClick={entryView} >Jestem pełnoletni</button>
          <button type='submit' id="scrubButton" formAction="https://pl.wikipedia.org/wiki/Mleko">Nie jestem pełnoletni</button>
        </form>

      </div>
    )
  }
}