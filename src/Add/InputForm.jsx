import React from 'react'


export class InputForm extends React.Component {

  render() {

    return (
      <div for='inputFormWrapper'>
        <table for='inputfor=mTable' cellspacing="20" style={{ width: 250 }}>
          <tbody>
            <tr>
              <td colSpan="2">
                <form for='inputForm'>
                  <label for='beerName'>Nazwa</label><br />
                  <input
                    type='text'
                    id='beerNameInput'
                    name='name'
                    style={{width: 378}}>
                  </input>
                  <table cellSpacing="0" cellPadding="0" style={{ margin: 0, padding: 0 }}>
                    <tbody>
                      <tr>
                        <td>
                          <div style={{ display: "inline-block" }}>
                            <label for='beerType'>Gatunek</label>
                            <br />
                            <input
                              type='text'
                              id='beerTypeInput'
                              name='type'
                              style={{ width: 180, marginRight: 10 }}>
                            </input>
                          </div>
                        </td>
                        <td>
                          <div style={{ display: "inline-block" }}>

                            <label for='beerAlcohol'>Zawartość alkoholu</label>

                            <br />
                            <input
                              type='text'
                              id='beerAlcoholInput'
                              name='alcohol'
                              style={{ width: 180, marginRight: 10 }}>
                            </input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="3">
                          <div style={{ display: "inline-block" }}>

                            <label for='beerExtract'>Ekstrakt</label>

                            <br />
                            <input
                              type='text'
                              id='beerExtractInput'
                              name="extract"
                              style={{ width: 114, marginRight: 10 }}>
                            </input>
                          </div>

                          <div style={{ display: "inline-block" }}>

                            <label for='beerIbu'>IBU</label>

                            <br />
                            <input
                              type='text'
                              id='beerIbuInput'
                              name="ibu"
                              style={{ width: 114, marginRight: 10 }}>
                            </input>
                          </div>

                          <div style={{ display: "inline-block" }}>
                            <label for='beerHop'>Gatunek chmielu</label>

                            <br />
                            <input
                              type='text'
                              id='beerHopInput'
                              name='hop'
                              style={{ width: 114, marginRight: 10 }}>
                            </input>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div style={{ display: "inline-block" }}>

                            <label for='beerProducer'>Producent/Importer</label>

                            <br />
                            <input
                              type='text'
                              id='beerProducerInput'
                              name='producer'
                              style={{ width: 180, marginRight: 10 }}>
                            </input>
                          </div>
                        </td>
                        <td>
                          <div style={{ display: "inline-block" }}>

                            <label for='beerCountry'>Kraj pochodzenia</label>

                            <br />
                            <input
                              type='text'
                              id='beerCountryInput'
                              name='country'
                              style={{ width: 180, marginRight: 10 }}>
                            </input>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <label for='beerPhoto'>Zdjęcie</label>
                  <br />
                  <input
                    type="text"
                    id='beerPhotoInput'
                    name='photo'
                    placeholder="URL do zdjęcia"
                    style={{ width: 378}}>
                  </input>
                  <br /> <br />
                  <label for='beerDecription'>Dodaj opis</label>
                  <br />
                  <textarea
                    style={{ width: 378, height: 200, resize: "none" }}
                    id='beerDecriptionInput'
                    name='decription'>
                  </textarea>

                </form>
                </td>
              </tr>
              <tr>
              <td style={{textAlign:"center"}}>
                <button type="button" /*onClick={submitForm()}*/>Prześlij</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}