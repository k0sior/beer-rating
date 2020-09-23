import React from 'react'

export class Contact extends React.Component {

  render () {
    const sendMessage = this.props.sendMessage;
    return(
      <div className="contactWrapper">
        <form className="contactForm">
          <label htmlFor="contactName" id="contactNameLabel">Twój email</label>
          <br/>
          <input 
            className="contactNameInput"
            id="contactName" 
            name="contactName"
            style={{ 
              width: 378}}>
          </input>
          <br/>
          <label htmlFor="contactSubject" id="contactSubjectLabel">Temat wiadomości</label>
          <br/>
          <input 
            className="contactSubjectInput"
            id="contactSubject" 
            name="contactSubject"
            style={{
              width:378}}>
          </input>
          <br/>
          <label htmlFor="contactMessage" id="contactMessageLabel">Wiadomość</label>
          <br/>
          <textarea 
            className="contactMessageInput"
            id="contactMessage" 
            name="contactMessage"
            style={{ 
              width: 378, 
              height: 200,}}> 
          </textarea>
          <br/>
          <button type="button" id="contactMessageButton" onClick={sendMessage}>Prześlij</button>
        </form>
      </div>
    )
  }
}