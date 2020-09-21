import React from 'react'


export class InputForm extends React.Component {

  render() {
    const submitForm = this.props.submitForm;
    return (
      <div htmlFor='inputFormWrapper' id="inputForm" className="inputFormWrapper">
        <table htmlFor='inputFormTable' 
          cellSpacing="20" 
          cellPadding="5">
          <tbody>
            <tr>
              <td colSpan="2">
                <form htmlFor='inputForm'>
                  <label htmlFor='beerName'>Nazwa</label><br />
                  <input
                    type='text'
                    id='beerInputName'
                    name='name'
                    required
                    style={{ 
                      width: 378,}}>
                  </input>
                  <table 
                  cellSpacing="0" 
                  cellPadding="0" 
                  style={{ 
                    margin: 0, 
                    padding: 0,}}>
                    <tbody>
                      <tr>
                        <td>
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='beerType'>Gatunek piwa</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputType'
                              name='type'
                              required
                              style={{ 
                                width: 180,
                                marginRight: 10,}}>
                            </input>
                          </div>
                        </td>
                        <td>
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='beerAlcohol'>Zawartość alkoholu</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputAlcohol'
                              name='alcohol'
                              required
                              style={{ 
                                width: 180,
                                marginRight: 10,}}>
                            </input>
                          </div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td colSpan="3">
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='beerExtract'>Ekstrakt</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputExtract'
                              name="extract"
                              required
                              style={{ 
                                width: 114, 
                                marginRight: 10,}}>
                            </input>
                          </div>
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='beerIbu'>IBU</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputIbu'
                              name="ibu"
                              style={{ 
                                width: 114, 
                                marginRight: 10,}}>
                            </input>
                          </div>
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='beerHop'>Rodzaj chmielu</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputHop'
                              name='hop'
                              style={{ 
                                width: 114, 
                                marginRight: 10,}}>
                            </input>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='beerProducer'>Producent/Importer</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputProducer'
                              name='producer'
                              style={{ 
                                width: 180, 
                                marginRight: 10,}}>
                            </input>
                          </div>
                        </td>
                        <td>
                          <div style={{ display: "inline-block" }}>
                            <label htmlFor='beerCountry'>Kraj pochodzenia</label>
                            <br />
                            <input
                              type='text'
                              id='beerInputCountry'
                              name='country'
                              style={{ 
                                width: 180, 
                                marginRight: 10,}}>
                            </input>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <label htmlFor='beerPhoto'>Zdjęcie</label>
                  <br />
                  <input
                    type="url"
                    id='beerInputPhoto'
                    name='photo'
                    placeholder="URL do zdjęcia"
                    style={{ 
                      width: 378,}}>
                  </input>
                  <br /> <br />
                  <label htmlFor='beerDecription'>Dodaj opis</label>
                  <br />
                  <textarea
                    style={{ 
                      width: 378, 
                      height: 200,}}
                    id='beerInputDecription'
                    name='decription'>
                  </textarea>
                </form>
              </td>
            </tr>

            <tr>
              <td style={{
                textAlign: "center",}}>
                <button type="submit" id="submitFormButton" onClick={submitForm}>Prześlij</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}