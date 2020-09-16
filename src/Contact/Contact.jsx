import React from 'react'

export class Contact extends React.Component {

  render () {
    return(
      <div className="contactWrapper">
        <form className="contactForm">
          <label htmlFor="contactName" id="contactNameLabel">Twój email</label>
          <input className="contactNameInput" name="contactName"></input>
          <br/>
          <label htmlFor="contactSubject" id="contactSubjectLabel">Temat wiadomości</label>
          <input className="contactSubjectInput" name="contactSubject"></input>
          <br/>
          <label htmlFor="contactMessage" id="contactMessageLabel">Wiadomość</label>
          <textarea className="contactMessageInput" name="contactMessage"></textarea>
          <br />
          <button type="submit" id="contactMessageButton">Prześlij</button>
        </form>
      </div>
    )
  }
}