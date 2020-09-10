import React from 'react';



export class Warning extends React.Component {

  render(){
    const entryView = this.props.entryView
    return( 
      <div className="warningWrapper" 
        style={{
          display: 'flex',
          flexDirection: "column",
          justifySelf: "center",
          justifyContent: "center",
          margin: "20vw 30vw 20vw 30vw",
          textAlign: "center"
        }}>
        <h5>OSTRZEŻENIE!</h5>
        <p>Strona wyłącznie dla osób pełnoletnich (18+)</p>
        <form>
          <button type="button" id='adult' onClick={entryView} >Jestem pełnoletni</button>
          <button type='submit' formAction="https://pl.wikipedia.org/wiki/Mleko">Nie jestem pełnoletni</button>
        </form>

      </div>
    )
  }
}